module.exports = (dplLogo, title, token)=>`<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito">
        <link href="https://fonts.googleapis.com/css2?family=Pridi:wght@300&display=swap" rel="stylesheet">
        <title>${title}</title>
        <style>
            .container {
                height: 100vh;
                width: 100%;
                align-items: center;
                display: flex;
                justify-content: center;
                background: transparent;
                color: #ffffff;

            }

            .card {
                position: relative;
                width: 888px;
                height: 771px;
                background: #FFFFFF;
                padding: 10px 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .card_mini {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: absolute;
                width: 664px;
                height: 546px;
                margin-top: 50px;
            }

            .button {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                padding: 8px 122px;
                gap: 10px;
                width: 121px;
                height: 48px;
                background: #F3F4FF;
                box-shadow: 0px 4px 16px 4px rgba(143, 144, 153, 0.08);
                border-radius: 8px;
                margin-top: 50px;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <div class="card">
                <div class="card_mini">
                    <img src="${dplLogo}" alt="" style="width: 439px;
                    height: 110px; margin-bottom: 30px;">
                    <h2 style="width:267px; height: 22px; font-family: 'Nunito'; font-style: normal; font-weight: 700; font-size: 30px; line-height: 22px; color: #000000;
                    ">Confirm your Email</h2>
                    <p style="width: 647px; height: 23px; font-family: 'Nunito'; font-style: normal; font-weight: 500; font-size: 25px; line-height: 32px; color: #000000;
                    margin: 30px;">
                        Use this code below to verify your email on the docuplier.</p>
                    <div class="button">
                        <p style="width: 77px; height: 32px; font-family: 'Nunito'; font-style: normal; font-weight: 600; font-size: 24px; line-height: 32px; display: flex; align-items: center; color: #1B2124;
                       margin-top: 10px; ">${token.toString().split('').join(' ')}</p>
                    </div>
                    <p
                        style="width: 664px; height: 23px; margin-left: 30px; margin-top: 60px; font-family: 'Nunito'; font-style: normal; font-weight: 500; font-size: 21px; line-height: 22px; color: #000000; ">
                        If you did not initiate this action, kindly ignore and delete this email</a></p>

                </div>

            </div>
        </div>
    </body>

</html>`