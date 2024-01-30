const accordion = document.querySelectorAll(".accordion__qna");

accordion.forEach((acc, i) => {
  acc.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("accordion__question") ||
      e.target.classList.contains("accordion__btn")
    ) {
      const question = document.querySelectorAll(".accordion__question");
      const answers = document.querySelectorAll(".accordion__answer");
      const plusbtn = document.querySelectorAll(".accordion__btn--plus");
      const minusbtn = document.querySelectorAll(".accordion__btn--minus");

      if (
        acc.querySelector(".accordion__answer").classList.contains("hidden")
      ) {
        answers.forEach((ans, i) => {
          if (!ans.classList.contains("hidden")) {
            ans.classList.toggle("hidden");
            plusbtn[i].classList.toggle("hidden");
            minusbtn[i].classList.toggle("hidden");
          } else {
            question[i].ariaExpanded = false;
          }
        });
      }

      const val =
        acc.querySelector(".accordion__question").ariaExpanded === "true"
          ? true
          : false;

      acc.querySelectorAll('[role="button"]').forEach((btn) => {
        btn.ariaExpanded = `${!val}`;
      });

      acc.querySelector(".accordion__question").ariaExpanded = `${!val}`;
      acc.querySelector(".accordion__answer").classList.toggle("hidden");
      acc.querySelector(".accordion__btn--plus").classList.toggle("hidden");
      acc.querySelector(".accordion__btn--minus").classList.toggle("hidden");
    }
  });
});
