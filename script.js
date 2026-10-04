const questions = [

    {
        question: "Apa yang paling aku suka dari Reyhan?",
        answers: [
            "Senyumnya",
            "Cara dia perhatian",
            "Sifatnya",
            "Semuanya"
        ],
        correct: 3
    },

    {
        question: "Kalau aku lagi bad mood, aku biasanya...",
        answers: [
            "Diam",
            "Ngambek",
            "Cari perhatian",
            "Tergantung keadaan"
        ],
        correct: 3
    },

    {
        question: "Apa yang paling bikin aku senang?",
        answers: [
            "Diperhatiin",
            "Dikasih hadiah",
            "Diajak jalan",
            "Semua benar"
        ],
        correct: 3
    },

    {
        question: "Kalau aku bilang 'terserah', sebenarnya...",
        answers: [
            "Benar-benar terserah",
            "Ada sesuatu yang aku mau",
            "Aku lagi ngantuk",
            "Aku lupa"
        ],
        correct: 1
    },

    {
        question: "Menurutku Reyhan itu...",
        answers: [
            "Nyebelin",
            "Lucu",
            "Bikin nyaman",
            "Semua benar"
        ],
        correct: 3
    },

    {
        question: "Hal kecil apa yang bisa bikin aku salting?",
        answers: [
            "Diperhatiin",
            "Dipanggil sayang",
            "Dikasih senyum",
            "Semua benar"
        ],
        correct: 3
    },

    {
        question: "Kalau aku kangen Reyhan, aku biasanya...",
        answers: [
            "Chat duluan",
            "Cari alasan buat ngobrol",
            "Diam-diam kangen",
            "Semua bisa terjadi"
        ],
        correct: 3
    },

    {
        question: "Apa yang paling penting dalam hubungan kita?",
        answers: [
            "Kepercayaan",
            "Komunikasi",
            "Saling mengerti",
            "Semuanya"
        ],
        correct: 3
    },

    {
        question: "Seberapa sayang aku sama Reyhan?",
        answers: [
            "Sedikit",
            "Lumayan",
            "Banyak",
            "Nggak bisa dihitung"
        ],
        correct: 3
    },

    {
        question: "Pertanyaan terakhir. Reyhan sayang aku nggak?",
        answers: [
            "Nggak",
            "Mungkin",
            "Iya",
            "IYA BANGET"
        ],
        correct: 3
    }

];


let currentQuestion = 0;
let score = 0;


function startQuiz() {

    document
        .getElementById("home")
        .classList.remove("active");

    document
        .getElementById("quiz")
        .classList.add("active");

    showQuestion();
}


function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("number").innerText =
        `Pertanyaan ${currentQuestion + 1} dari ${questions.length}`;

    document.getElementById("question").innerText =
        question.question;

    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";


    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.classList.add("answer");

        button.innerText = answer;

        button.onclick = () => {

            if (index === question.correct) {
                score++;
            }

            currentQuestion++;

            if (currentQuestion < questions.length) {

                showQuestion();

            } else {

                showResult();

            }

        };

        answers.appendChild(button);

    });

}


function showResult() {

    document
        .getElementById("quiz")
        .classList.remove("active");

    document
        .getElementById("result")
        .classList.add("active");


    document.getElementById("score").innerText =
        `${score} / ${questions.length}`;


    let text;


    if (score === 10) {

        text =
            "GILA. Reyhan ternyata hafal banget. Berarti selama ini merhatiin aku, ya? 💗";

    }

    else if (score >= 8) {

        text =
            "Lumayan banget. Reyhan cukup kenal aku. Masih aman buat dipertahanin.";

    }

    else if (score >= 5) {

        text =
            "Setengah-setengah nih. Kayaknya Reyhan harus lebih sering merhatiin aku.";

    }

    else {

        text =
            "REYHAN??? Kita perlu evaluasi hubungan ini. 😭";

    }


    document.getElementById("resultText").innerText =
        text;
}


function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    document
        .getElementById("result")
        .classList.remove("active");

    document
        .getElementById("home")
        .classList.add("active");

}
