function oninputPhone(target) {
  target.value = target.value
    .replace(/[^0-9]/g, "")
    .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3");
}

$(function () {
  /* 이메일 형식 맞는지 판단 */
  $("#emailError").hide();
  $("#email").change(function () {
    const str = $("#email").val();
    const className = document.getElementById("email").classList;
    if (str.includes("@") && str.includes(".com")) {
      className.remove("active");
      $("#emailError").hide();
    } else {
      className.add("active");
      $("#emailError").show();
    }
  });

  /* 비밀번호와 비밀번호 확인이 일치하는지 비교 판단 */
  $("#pwError").hide();
  $("#passwordCheck").change(function () {
    // 비밀번호 확인이 입력되면 동작
    const pw = $("#password").val();
    const pwCheck = $("#passwordCheck").val();
    const className = document.getElementById("password").classList;
    const className2 = document.getElementById("passwordCheck").classList;
    if (pw != pwCheck) {
      className.add("active");
      className2.add("active");
      $("#pwError").show();
    }
    if (pw == pwCheck) {
      className.remove("active");
      className2.remove("active");
      $("#pwError").hide();
    }
  });

  $("#selboxDirect").hide();
  $("#school").change(function () {
    // 대학교를 선택할 경우 나타남
    if ($(this).find("option:selected").val() == "univ") {
      $("#selboxDirect").show();
    } else {
      $("#selboxDirect").hide();
    }
  });
});
