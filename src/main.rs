#![feature(plugin)]
#![plugin(rocket_codegen)]

extern crate rocket;

use std::io;
use std::path::{Path, PathBuf};

use rocket::response::NamedFile;

#[get("/")]
fn index() -> io::Result<NamedFile> {
    NamedFile::open("assets/index.html")
}

#[get("/extras/<file..>")]
fn static_file(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("assets/").join(file)).ok()
}

fn main() {
    rocket::ignite().mount("/", routes![index, static_file]).launch();
}
