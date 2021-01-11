var tableLayout = tableLayout || {};
tableLayout = (function () {

  $(function () {
    appendTableContents();
  });

  $('#keyword').on('keyup', function (e) {
    $('#users').find('tbody tr').each(function () {
      let isMatch = false;
      //userIdとuserNameのループ
      $(this).find('p').each(function () {
        if ($(this).text().toUpperCase().includes($('#keyword').val().toUpperCase())) {
          isMatch = true;
        }
      });
      if (isMatch) $(this).show();
      if (!isMatch) $(this).hide();
    })
  });

  function appendTableContents() {
    $.each(usersData.users, function (index, user) {
      const colUserId = '<td><p>' + user.userId + '</p></td>';
      const colUserName = '<td><p>' + user.userName + '</p></td>';

      const colUrl1 = '<td class="url-contents"><a href="./to.html?param=' + user.userId + '">url1</a></td>';
      const colUrl2 = '<td class="url-contents"><a href="./to.html?param=' + user.userId + '">url2</a></td>';
      const colUrl3 = '<td class="url-contents"><a href="./to.html?param=' + user.userId + '">url3</a></td>';
      const colUrl4 = '<td class="url-contents"><a href="./to.html?param=' + user.userId + '">url4</a></td>';

      $('#users tbody').append('<tr>' + colUserId + colUserName + colUrl1 + colUrl2 + colUrl3 + colUrl4 + '</tr>');
    })
  }

})();