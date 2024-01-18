$(document).ready(function () {
    var counter = 0;
    $('#addToListBtn').on('click', function () {
        const inputValue = $('#textInput').val()
        if (inputValue.trim() !== '') {
            var newItem = $('<li>').text(inputValue)
            if (counter % 2 === 0) {
                newItem.addClass('class1')
            } else {
                newItem.addClass('class2')
            }
            counter++

            // Append the new item to the unordered list
            $('#itemList').append(newItem)
            $('#textInput').val('')
        }
    })
})