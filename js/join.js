$(document).ready(function () {
  var idx = true;
  $("#userError").hide();
  $("#emailError2").hide();
  $("#phoneError").hide();
  $("#submit").click(function () {
    const userClass = document.getElementById("username").classList;
    const emailClass = document.getElementById("email").classList;
    const phoneClass = document.getElementById("phone").classList;
    $("#username").change(function () {
      userClass.remove("active");
      $("#userError").hide();
    });
    if ($("#username").val().length == 0) {
      $("#username").focus();
      $("#userError").show();
      userClass.add("active");
      idx = false;
    }

    if ($("#email").val().length == 0) {
      $("#email").focus();
      $("#emailError2").show();
      emailClass.add("active");
      idx = false;
    }

    if ($("#birth").val().length == 0) {
      alert("생일을 입력하세요.");
      $("#birth").focus();
      idx = false;
    }

    $("#phone").change(function () {
      phoneClass.remove("active");
      $("#phoneError").hide();
    });
    if ($("#phone").val().length == 0) {
      phoneClass.add("active");
      $("#phoneError").show();
      $("#phone").focus();
      idx = false;
    }

    if (!$("select[name=gender]").val()) {
      alert("성별을 선택하세요.");
      $("select[name=gender]").focus();
      idx = false;
    }
    if (!$("select[name=address]").val()) {
      alert("거주지역을 선택하세요.");
      $("select[name=address]").focus();
      idx = false;
    }
    if (!$("select[name=education]").val()) {
      alert("최종학력을 선택하세요.");
      $("select[name=education]").focus();
      idx = false;
    }
    if ($("select[name=education]").val() == "univ") {
      if (!$("select[name=status]").val()) {
        alert("상태를 선택하세요.");
        $("select[name=status]").focus();
        idx = false;
      }
      if ($("#university").val().length == 0) {
        alert("대학교를 입력하세요.");
        $("#university").focus();
        idx = false;
      }
      if ($("#department").val().length == 0) {
        alert("학과를 입력하세요.");
        $("#department").focus();
        idx = false;
      }
    }
    if (!$("select[name=mbti]").val()) {
      alert("mbti을 선택하세요.");
      $("select[name=mbti]").focus();
      idx = false;
    }
    return idx;
  });
});
function oninputPhone(target) {
  target.value = target.value
    .replace(/[^0-9]/g, "")
    .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3");
}

$(function () {
  /* 이메일 형식 맞는지 판단 */
  $("#emailError").hide();
  var reg_email =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  $("#email").change(function () {
    const str = $("#email").val();
    const className = document.getElementById("email").classList;
    if (reg_email.test(str)) {
      className.remove("active");
      $("#emailError").hide();
      $("#emailError2").hide();
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
  $("#education").change(function () {
    // 대학교를 선택할 경우 나타남
    if ($(this).find("option:selected").val() == "univ") {
      $("#selboxDirect").show();
    } else {
      $("#selboxDirect").hide();
    }
  });
});
