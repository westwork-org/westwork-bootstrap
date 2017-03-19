$(document).ready(function () {
    // Capture the form submit 
    $('form').submit(function () {
        var formData = $(this).serializeArray();
        formData['formName'] = this.name;
        $.ajax({
            type:     'POST',
            url:      '/process',
            data:     formData,
            dataType: 'json',
            encode:   true
        })
    })
})