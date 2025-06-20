document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const bonnesReponses = {
    q1: "b",
    q2: "b",
    q3: "a",
    q4: "c",
    q5: "a",
    q6: "b",
    q7: "a",
    q8: "b",
    q9: "b",
    q10: "c",
    q11: "a",
    q12: "a",
    q13: "a",
    q14: "a",
    q15: "a",
  };

  let score = 0;
  let feedback = "";

  for (const [question, bonneReponse] of Object.entries(bonnesReponses)) {
    const reponse = this[question].value;
    if (!reponse) {
      alert("Merci de répondre à toutes les questions.");
      return;
    }
    if (reponse === bonneReponse) {
      score++;
    } else {
      const correctText = this[question].querySelector(
        `option[value="${bonneReponse}"]`
      ).textContent;
      feedback += `${question.replace(
        "q",
        ""
      )}. La bonne réponse est : <strong>${correctText}</strong>.<br>`;
    }
  }

  const resultat = document.getElementById("resultatQuiz");
  const total = Object.keys(bonnesReponses).length;
  if (score === total) {
    resultat.innerHTML = `<div class='alert alert-success'>Parfait ! Tu as réussi le quiz avec un score de ${score}/${total} ✅</div>`;
  } else {
    resultat.innerHTML = `<div class='alert alert-warning'>Tu as eu ${score}/${total}.<br>${feedback}</div>`;
  }

  // Scroll to result
  resultat.scrollIntoView({ behavior: "smooth" });
});
