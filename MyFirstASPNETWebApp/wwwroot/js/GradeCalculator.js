/*This is for the grade calculator */
/*Run the function while clicking the button*/
/*Using JavaScript & jQuery*/
$("#btnSend").click(function () {
    var fScore = ($("#txtAssignments").val() * 0.55 + $("#txtProject").val() * 0.05 + $("#txtQuizzes").val() * 0.10 + $("#txtExams").val() * 0.20 + $("#txtIntex").val() * 0.10).toFixed(2);
    var sLetterGrade = "";
    if (fScore >= 94) {
        sLetterGrade = "A";
    }
    else if (fScore >= 90) {
        sLetterGrade = "A-";
    }
    else if (fScore >= 87) {
        sLetterGrade = "B+";
    }
    else if (fScore >= 84) {
        sLetterGrade = "B";
    }
    else if (fScore >= 80) {
        sLetterGrade = "B-";
    }
    else if (fScore >= 77) {
        sLetterGrade = "C+";
    }
    else if (fScore >= 74) {
        sLetterGrade = "C";
    }
    else if (fScore >= 70) {
        sLetterGrade = "C-";
    }
    else if (fScore >= 67) {
        sLetterGrade = "D+";
    }
    else if (fScore >= 64) {
        sLetterGrade = "D";
    }
    else if (fScore >= 60) {
        sLetterGrade = "D-";
    }
    else {
        sLetterGrade = "F";
    }
    alert("The final score is " + fScore + "% with a letter grade " + sLetterGrade);
})