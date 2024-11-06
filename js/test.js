// alert(1); テスト問題なし

function audio() {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
}


$(document).ready(function () {

    var userChoice = null;  // ここで変数を定義することが重要！

    // 3つのcircleにクリックイベントを追加
    $("#circle_1, #circle_2, #circle_3").on("click", function () {
        // 他の円から 'selected' クラスを削除
        $("#circle_1, #circle_2, #circle_3").removeClass("selected");
        // クリックした円に 'selected' クラスを追加
        $(this).addClass("selected");

        // ユーザーの選択を保存
        userChoice = $(this).attr("id");
        console.log("選択された画像:", userChoice);
    });


    //ボタンを押した時の挙動を追加
    $("#playButton").on("click", function () {
        // ユーザー側の選択肢をランダムに決定

        //アラート
        if (!userChoice) {
            Swal.fire({
                text: "先に3つのアイテムから1つを選択してくださいね",
                icon: "warning",
                confirmButtonText: "OK",
                confirmButtonColor: "rgb(30 58 138)",  // ボタン色
                background: "#fff",
                width: "300px",  // モバイル画面に適した幅
                customClass: {
                    title: "font-medium text-xl font-[Poppins]", //タイトルのフォントを変更
                    htmlContainer: "font-[Zen+Maru+Gothic]", //テキストのフォントを変更
                    confirmButton: "rounded-full px-8",  // ボタンを角丸に
                    popup: 'rounded-xl'  // 角丸なポップアップ
                }
            });
            return;
        }


        var num = Math.floor(Math.random() * 10);
        console.log(num, "箱の中身");


        $("#result").html(""); // 初期化して過去の画像を消去

        if (num === 0) {
            console.log("ゴリラ");
            // 画像を表示
            $("#result").html('<img src="img/golila.png" alt="画像" width="100">');
        } else if (num === 1) {
            console.log("パン");
            // 画像を表示
            $("#result").html('<img src="img/bread.png" alt="画像" width="100">');
        } else if (num === 2) {
            console.log("リップ");
            // 画像を表示
            $("#result").html('<img src="img/lip.png" alt="画像" width="100">');
        } else if (num === 3) {
            console.log("木「");
            $("#result").html('<img src="img/tree.png" alt="画像" width="100">');
        } else if (num === 4) {
            console.log("おでん");
            $("#result").html('<img src="img/oden.png" alt="画像" width="100">');
        } else if (num === 5) {
            console.log("犬");
            $("#result").html('<img src="img/dog.png" alt="画像" width="100">');
        } else if (num === 6) {
            console.log("チーズ");
            $("#result").html('<img src="img/cheese_pink.png" alt="画像" width="100">');
            isMatch = (userChoice === "circle_1");  // circle_1（チーズ）とマッチ
        } else if (num === 7) {
            console.log("白米");
            $("#result").html('<img src="img/rice_pink.png" alt="画像" width="100">');
            isMatch = (userChoice === "circle_2");  // circle_2（白米）とマッチ
        } else if (num === 8) {
            console.log("ハンバーガー");
            $("#result").html('<img src="img/humberger_pink.png" alt="画像" width="100">');
            isMatch = (userChoice === "circle_3");  // circle_3（ハンバーガー）とマッチ
        } else if (num === 9) {
            console.log("ポテト");
            $("#result").html('<img src="img/potato.png" alt="画像" width="100">');
        }


        // マッチング結果の判定とポップアップ表示
        setTimeout(function () {
            if (isMatch) {


                Swal.fire({
                    title: "マッチング成功！",
                    text: "やったね😄",
                    icon: "success",
                    width: "300px",
                    confirmButtonText: "もう一度プレイ",
                    confirmButtonColor: "rgb(30 58 138)",
                    customClass: {
                        title: "font-medium text-xl font-[Poppins]",
                        htmlContainer: "font-[Zen+Maru+Gothic]",
                        confirmButton: "rounded-full px-8",  // ボタンを角丸に
                        popup: 'rounded-xl'  // 角丸なポップアップ
                    },

                    // 紙吹雪の設定を追加
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    didOpen: () => {
                        confetti({
                            particleCount: 100,
                            spread: 70,
                            origin: { y: 0.6 },
                            colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#DB7093']
                        });
                    }


                }).then((result) => {
                    if (result.isConfirmed) {
                        // リセット処理
                        $("#result").html("");
                        $("#circle_1, #circle_2, #circle_3").removeClass("selected");
                        userChoice = null;
                    }
                });
            } else {
                Swal.fire({
                    title: "残念！",
                    text: "次はマッチさせるぞ😭",
                    icon: "error",
                    width: "300px",
                    confirmButtonText: "もう一度プレイ",
                    confirmButtonColor: "rgb(30 58 138)",
                    customClass: {
                        title: "font-medium text-xl font-[Poppins]", //タイトルのフォントを変更
                        htmlContainer: "font-[Zen+Maru+Gothic]", //テキストのフォントを変更
                        confirmButton: "rounded-full px-8",  // ボタンを角丸に
                        popup: 'rounded-xl'  // 角丸なポップアップ
                    }




                }).then((result) => {
                    if (result.isConfirmed) {
                        // リセット処理
                        $("#result").html("");
                        $("#circle_1, #circle_2, #circle_3").removeClass("selected");
                        userChoice = null;
                    }

                });
            }
        }, 700); // 0.7秒後に結果を表示
    });
});


