const http = require('http')


let server = http.createServer((request, response)=>{

    let code = `

    <!DOCTYPE html>
    <html lang="en">
    
        <head>
            <title>CSS Cards</title>
            
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
            <link href="https://fonts.googleapis.com/css?family=Roboto:300&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i&display=swap" rel="stylesheet">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css" rel="stylesheet">  
    
           <style>
    
           @keyframes down-btn {
            0% { bottom:20px; }    
            100% { bottom:0px; }
        
            0% { opacity:0; }    
            100% { opaicty:1; }
        }
        
        @-webkit-keyframes down-btn {
            0% { bottom:20px; }    
            100% { bottom:0px; }
        
            0% { opacity:0; }    
            100% { opaicty:1; }
        }
        
        @-moz-keyframes down-btn {
            0% { bottom:20px; }    
            100% { bottom:0px; }
        
            0% { opacity:0; }    
            100% { opaicty:1; }
        }
        
        @-o-keyframes down-btn {
            0% { bottom:20px; }    
            100% { bottom:0px; }
        
            0% { opacity:0; }    
            100% { opaicty:1; }
        }
        
        body {
            margin:0;
        }
        
        .category-name {
            font-family: sans-serif;
            width: -webkit-fill-available;
            text-align: center;
            font-size: 40px;
        }
        
        .card-category-2 ul, .card-category-3 ul, .card-category-4 ul, .card-category-5 ul  .card-category-6 ul {
            padding: 0;
        }
            
        .card-category-2 ul li, .card-category-3 ul li, .card-category-4 ul li, .card-category-5 ul li, .card-category-6 ul li {
            list-style-type: none;
            display: inline-block;
            vertical-align: top;
        }
        
        .card-category-2 ul li, .card-category-3 ul li {
            margin: 10px 5px;
        }
        
        .card-category-1, .card-category-2, .card-category-3, .card-category-4, .card-category-5, .card-category-6 {
            font-family: sans-serif;
            margin-bottom: 45px;
            text-align: center;
        }
            .card-category-1 div, .card-category-2 div {
                display:inline-block;
            }
        
            .card-category-1 > div, .card-category-2 > div:not(:last-child) {
                margin: 10px 5px;
                text-align: left;
            }
        
            /* Basic Card */
            .basic-card {
                width:300px;
                position: relative;
                
                -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                -o-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
            }
            
                .basic-card .card-content {
                    padding: 30px;
                }
        
                .basic-card .card-title {
                    font-size: 25px;
                    font-family: 'Open Sans', sans-serif;
                }
        
                .basic-card .card-text {
                    line-height: 1.6;
                }
        
                .basic-card .card-link {
                    padding: 25px;
                    width: -webkit-fill-available;
                }
        
                    .basic-card .card-link a {
                        text-decoration: none;
                        position: relative;
                        padding: 10px 0px;
                    }
        
                    .basic-card .card-link a:after {
                        top: 30px;
                        content: "";
                        display: block;
                        height: 2px;
                        left: 50%;
                        position: absolute;
                        width: 0;
        
                        -webkit-transition: width 0.3s ease 0s, left 0.3s ease 0s;
                        -moz-transition: width 0.3s ease 0s, left 0.3s ease 0s;
                        -o-transition: width 0.3s ease 0s, left 0.3s ease 0s;
                        transition: width 0.3s ease 0s, left 0.3s ease 0s;
                    }
        
                    .basic-card .card-link a:hover:after { 
                        width: 100%; 
                        left: 0; 
                    }
            
            
            .basic-card-aqua {
                background-image: linear-gradient(to bottom right, #00bfad, #99a3d4);
            }
        
                .basic-card-aqua .card-content, .basic-card .card-link a {
                    color: #fff;
                }
                
                .basic-card-aqua .card-link {
                    border-top:1px solid #82c1bb;
                }
        
                    .basic-card-aqua .card-link a:after {
                        background:#fff;
                    }
        
            .basic-card-lips {
                background-image: linear-gradient(to bottom right, #ec407b, #ff7d94);
            }
        
                .basic-card-lips .card-content {
                    color: #fff;
                }
        
                .basic-card-lips .card-link {
                    border-top: 1px solid #ff97ba;
                }
        
                    .basic-card-lips .card-link a:after {
                        background:#fff;
                    }
            
            .basic-card-light {
                border: 1px solid #eee;
            }
        
                .basic-card-light .card-title, .basic-card-light .card-link a {
                    color: #636363;
                }
                
                .basic-card-light .card-text {
                    color: #7b7b7b;
                }
        
                .basic-card-light .card-link {
                    border-top: 1px solid #eee;
                }
        
                    .basic-card-light .card-link a:after {
                        background:#636363;
                    }
        
            .basic-card-dark {
                background-image: linear-gradient(to bottom right, #252525, #4a4a4a);
            }
        
                .basic-card-dark .card-title, .basic-card-dark .card-link a {
                    color:#eee;
                }
        
                .basic-card-dark .card-text {
                    color: #dcdcdcdd;
                }
        
                .basic-card-dark .card-link {
                    border-top: 1px solid #636363;
                }
        
                .basic-card-dark .card-link a:after {
                    background:#eee;
                }
        
        
            /* Image Card */
            .img-card {
                width:300px;
                position: relative;
                border-radius: 5px;
                text-align: left;
        
                -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                -o-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);        
            }
        
                .img-card .card-image {
                    position: relative;
                    margin: auto;
                    overflow: hidden;
                    border-radius: 5px 5px 0px 0px;
                    height: 200px;
                }
        
                .img-card .card-image img {
                    width:100%;
                    border-radius: 5px 5px 0px 0px;
                    
                    -webkit-transition: all 0.8s;
                    -moz-transition: all 0.8s;
                    -o-transition: all 0.8s;
                    transition: all 0.8s;
                }
        
                .img-card .card-image:hover img {
                    -webkit-transform: scale(1.1);
                    -moz-transform: scale(1.1);
                    -o-transform: scale(1.1);
                    transform: scale(1.1);
                }        
        
                .img-card .card-text {
                    padding: 0 15px 15px;
                    line-height: 1.5;   
                }
        
                .img-card .card-link {
                    padding: 20px 15px 30px;
                    width: -webkit-fill-available;
                }
        
                    .img-card .card-link a {
                        text-decoration: none;
                        position: relative;
                        padding: 10px 0;
                    }
        
                    .img-card .card-link a:after {
                        top: 30px;
                        content: "";
                        display: block;
                        height: 2px;
                        left: 50%;
                        position: absolute;
                        width: 0;
        
                        -webkit-transition: width 0.3s ease 0s, left 0.3s ease 0s;
                        -moz-transition: width 0.3s ease 0s, left 0.3s ease 0s;
                        -o-transition: width 0.3s ease 0s, left 0.3s ease 0s;
                        transition: width 0.3s ease 0s, left 0.3s ease 0s;
                    }
        
                    .img-card .card-link a:hover:after { 
                        width: 100%; 
                        left: 0; 
                    }        
                
                .img-card.iCard-style1 .card-title {
                    position: absolute;
                    font-family: 'Open Sans', sans-serif;
                    z-index: 1;
                    top: 10px;
                    left: 10px;
                    font-size: 30px;
                    color: #fff;
                }
                
                .img-card.iCard-style1 .card-text {            
                    color: #795548;
                }
        
                .img-card.iCard-style1 .card-link a {
                    color: #FF9800;                
                }
        
                .img-card.iCard-style1 .card-link a:after {            
                    background: #FF9800;
                }
        
                .img-card.iCard-style2 .card-title {
                    padding: 15px;
                    font-size: 25px;
                    font-family: 'Roboto', sans-serif;
                }
        
                .img-card.iCard-style2 .card-image {
                    margin-bottom: 15px;
                }
                
                .img-card.iCard-style2 .card-caption {
                    text-align: center;
                    top: 80%;
                    font-size: 17px;
                    color: #fff;
                    position: absolute;
                    width: 100%;
                    font-family: 'Roboto', sans-serif;
                    z-index: 1;
                }
                
                .img-card.iCard-style2 .card-link a {
                    border: 1px solid;
                    padding: 8px;
                    border-radius: 3px;
                    color: black;
                    font-size: 13px;
        
                    -webkit-transition: all 0.4s;
                    -moz-transition: all 0.4s;
                    -o-transition: all 0.4s;
                    transition: all 0.4s;
                }
        
                .img-card.iCard-style2 .card-link a:hover {            
                    background: black;
                }
        
                .img-card.iCard-style2 .card-link a:hover span {            
                    color:#fff;            
                }
        
                .img-card.iCard-style3 {
                    text-align: center;
                }
        
                .img-card.iCard-style3 .card-title {
                    top: 80%;
                    font-size: 30px;
                    color: #fff;
                    position: absolute;
                    width: 100%;
                    font-family: 'Roboto', sans-serif;
                    z-index: 1;
                }
        
                .img-card.iCard-style3 .card-text {
                    color: #636060;
                }
        
                .img-card.iCard-style3 .card-link {
                    border-top: 1px solid #e8e8e8;
                }
                    .img-card.iCard-style3 .card-link a {
                        color: #585858;
                    }
                    .img-card.iCard-style3 .card-link a:after {            
                        background: #585858;
                    }
        
            .img-card.iCard-style4 {
                text-align: right;
            }
        
            .img-card.iCard-style4 .card-caption {
                position: absolute;
                width: 100%;
                font-family: 'Open Sans', sans-serif;
                z-index: 1;
                top: 10px;
                right: 10px;
                color: #fff;
            }
        
            .img-card.iCard-style4 .card-title {
                width: 100%;
                padding: 20px 0px 12px 0;
                color: #E91E63;
            }
        
                .img-card.iCard-style4 .card-title span {
                    font-size: 25px;
                    margin-right: 12px;
                }
        
            .img-card.iCard-style4 .toggle {
                cursor: pointer;
                padding: 8px 0px 13px 0px;
                width: 55px;
            }
            
            .img-card.iCard-style4 .toggle span, .img-card.iCard-style4 .toggle span:nth-child(2), .img-card.iCard-style4 .toggle span:nth-child(3) {
                position: absolute;
                width: 8px;
                height: 8px;
                background: #E91E63;
                cursor: pointer;
            }
        
            .img-card.iCard-style4 .toggle span:nth-child(1) {
                right: 15px;
            }
        
            .img-card.iCard-style4 .toggle span:nth-child(2) {
                right: 27px;
            }
        
            .img-card.iCard-style4 .toggle span:nth-child(3) {
                right: 39px;
            }
        
            .img-card.iCard-style4 .card-text {
                opacity: 0;
                line-height: 0;
                padding-bottom: 0;
                color: #4c4c4c;
        
                -webkit-transition: ease-in-out 0.5s;
                -moz-transition: ease-in-out 0.5s;
                -o-transition: ease-in-out 0.5s;
                transition: ease-in-out 0.5s;
            }
        
            .img-card.iCard-style4 .toggle.active ~ .card-text{
                opacity: 1;
                line-height: 1.5;
                padding-bottom: 10px;
            }
        
            .img-card.iCard-style4 .card-link {
                border-top:1px solid #e8e8e8;
            }
        
                .img-card.iCard-style4 .card-link a {
                    color: #E91E63;
                }
                .img-card.iCard-style4 .card-link a:after {            
                    background: #E91E63;
                }
            
                
            /* Overlay Image Card */
            
            .ioverlay-card {
                position: relative;
                text-align: left;
            }
                
                .ioverlay-card img {
                    height: auto;
                    width: 100%;
                    border-radius: 4px;
                }
                
                .ioverlay-card .card-content {
                    position: absolute;
                    top: 25px;
                    left: 20px;
                }
        
                    .ioverlay-card .card-content .card-title{
                        font-size: 25px;
                    }
                
            .io-card-1 {
                color: #fff;
            }
        
            .io-card-1 .card-content .card-text {
                width: 95%;
                line-height: 1.5;
                padding-bottom: 10px;
            }
        
            .io-card-1 .card-link {
                position: absolute;
                top: 140px;
                left: 20px;
            }
        
                .io-card-1 .card-link a {
                    color:#fff;
                    text-decoration: none;
                    padding: 10px;
                    border: 1px solid;
                    border-radius: 4px;
                    background: #3F51B5;
        
                    -webkit-transition: all 0.4s;
                    -moz-transition: all 0.4s;
                    -o-transition: all 0.4s;
                    transition: all 0.4s;
                }
        
                .io-card-1 .card-link a:hover {
                    color:#3F51B5;
                    background: #fff;
                    border-color:#fff;
                }
        
            .io-card-2 .card-content {
                color: #fff;
            }
        
            .io-card-2 .card-link {
                position: absolute;
                bottom: 30px;
                left: 20px;
            }
            
                .io-card-2 .card-link a {
                    color:#fff;
                    text-decoration: none;
                    padding: 10px;
                    border: 1px solid #fff;
                    border-radius: 4px;
        
                    -webkit-transition: all 0.4s;
                    -moz-transition: all 0.4s;
                    -o-transition: all 0.4s;
                    transition: all 0.4s;
                }
        
                .io-card-2 .card-link a:hover {
                    color:black;
                    background-color: #fff;
                }
        
                .io-card-2 .card-content .card-text {
                    line-height: 1.5;
                    padding-bottom: 10px;
                }
        
                
            /* Product & Shop Cards */
            .card-category-4 .sp-card-1 {
                background-image: linear-gradient(#f74545, #673AB7);
                height: 245px;
                width: 535px;
                text-align: left;
        
                -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                -o-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
            }
        
                .card-category-4 .sp-card-1 .shop-button {
                    padding-left: 20px;
                }
        
                .card-category-4 .sp-card-1 ul {
                    padding:0;
                }
        
                    .card-category-4 .sp-card-1 ul li {
                        list-style-type: none;
                        display: inline-block;                
                    }
        
                    .card-category-4 .sp-card-1 ul li:nth-child(1) {
                        padding: 20px 20px;
                        float: left;
                    }
        
                        .card-category-4 .sp-card-1 ul li:nth-child(1) .off-label {
                            border: 1px solid #fff;
                            background: #fff;
                            font-size: 11px;
                            padding: 7px;
                        }
        
                        .card-category-4 .sp-card-1 ul li:nth-child(1) .return-line {
                            font-size: 13px;
                            padding: 20px 0 15px 0;
                            color: #fff;
                        }
        
                        .card-category-4 .sp-card-1 .shop-button a {
                            text-decoration: none;
                            color: #fff;
                            border: 1px solid;
                            padding: 10px 15px;
                            background: #1f3c3d;
        
                            -webkit-transition: ease-in-out .2s;
                            -moz-transition: ease-in-out .2s;
                            -o-transition: ease-in-out .2s;
                            transition: ease-in-out .2s;
                        }
        
                        .card-category-4 .sp-card-1 .shop-button a:hover {
                            background: transparent;
                        }
        
                    .card-category-4 .sp-card-1 ul li:nth-child(2) {
                        text-align: right;
                        padding: 0;
                        float: right;
                    }
        
                        .card-category-4 .sp-card-1 ul li:nth-child(2) img {
                            height: 170px;
                            padding: 15px 0 0;
        
                            -webkit-transition: all .3s ease-in;
                            -moz-transition: all .3s ease-in;
                            -o-transition: all .3s ease-in;
                            transition: all .3s ease-in;
                        }
        
                        .card-category-4 .sp-card-1 ul li:nth-child(2) img:hover {
                            -webkit-transform: scale(0.90);
                            -moz-transform: scale(0.90);
                            -o-transform: scale(0.90);
                            transform: scale(0.90);
                        }
        
                        .card-category-4 .sp-card-1 ul li:nth-child(2) .price-start {
                            text-align: center;
                            font-size: 18px;
                            color: #fff;
                            padding: 18px 0px 0px;
                        }
        
                .card-category-4 .sp-card-1 .card-title {
                    color: #fff;
                    font-size: 23px;
                    font-weight: 550;
                }
        
                .card-category-4 .sp-card-1 .sub-line {
                    padding:8px 0px 15px 0px;
                    color:#fff;
                    font-size:20px;
                }
        
            .card-category-4 .sp-card-2 {
                width: 230px;
                border: 1px solid #f9f9f9;
                text-align:left;
        
                -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                -o-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
            }
        
                .card-category-4 .sp-card-2 .overlap {
                    background: #3f51b57a;
                    width: inherit;
                    height: 0;
                    position: absolute;
                    text-align: center;
                    opacity: 0;
        
                    -webkit-transition: all .5s ease-in-out;
                    -moz-transition: all .5s ease-in-out;
                    -o-transition: all .5s ease-in-out;
                    transition: all .5s ease-in-out;
                }
        
                    .card-category-4 .sp-card-2:hover .overlap{
                        opacity: 1;
                        height: 204px;
                    }
        
                    .card-category-4 .sp-card-2 .overlap a {
                        position: relative;
                        top: 50%;
                        text-decoration: none;
                        color: #673AB7;
                        padding: 10px;
                        font-size: 14px;
                        font-weight: 600;
                        background: #fff;
                    }
                
                .card-category-4 .sp-card-2 .card-image {
                    text-align: center;
                }
                
                    .card-category-4 .sp-card-2 .card-image img {
                        height: 200px;
                    }
        
            .card-category-4 .sp-card-2 .card-content {
                padding: 20px;
            }
        
                .card-category-4 .sp-card-2 .card-content .card-title {
                    font-weight: 600;
                }
        
                .card-category-4 .sp-card-2 .card-content .price-start {
                    font-weight: 600;
                    color: #673AB7;
                    float: right;
                }
        
                .card-category-4 .sp-card-2 .card-content .card-caption {
                    font-size: 14px;
                    color: #717171;
                    padding: 15px 0px 10px;
                }
        
                .card-category-4 .sp-card-2 .card-content .cloth-size, .card-category-4 .sp-card-2 .card-content .cloth-colors {
                    padding: 10px 0;
                    font-size: 13px;
                    color: #545454;
                    text-transform: uppercase;
                }
        
                .card-category-4 .sp-card-2 .card-content .cloth-colors span:not(:nth-child(1)) {
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    border-radius: 40px;
                }
        
                    .card-category-4 .sp-card-2 .card-content .cloth-colors .color1 {
                        background: red;
                        border:1px solid black;
                        margin-left: 10px;            
                    }
        
                    .card-category-4 .sp-card-2 .card-content .cloth-colors .color2 {
                        background: blue;
                        border:1px solid black;
                        margin-left: 35px;           
                    }
        
                    .card-category-4 .sp-card-2 .card-content .cloth-colors .color3 {
                        background: Orange;
                        border:1px solid black;
                        margin-left: 60px;            
                    }
        
                    .card-category-4 .sp-card-2 .card-content .cloth-colors .color4 {
                        background: black;
                        border:1px solid black;
                        margin-left: 85px;            
                    }
        
            .card-category-4 .sp-card-3 {
                width: 550px;
                height: 345px;
                border: 1px solid #efefef;
        
                -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                -o-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
            }    
                    
            .card-category-4 .sp-card-3 .card-title {
                color: #525252;
                font-weight: 600;
                font-size: 25px;
                padding: 15px 20px;
                text-align: right;
                width: 40%;
                float: right;
            }
            
                .card-category-4 .sp-card-3 .footer-card {
                    padding:0;
                }
        
                    .card-category-4 .sp-card-3 .footer-card p {
                        font-size: 15px;
                        color: #505050;
                        line-height: 1.5;
                    }
        
                .card-category-4 .sp-card-3 .buy-btn {
                    padding: 0px 0px 35px 0;
                }
        
                    .card-category-4 .sp-card-3 .buy-btn a {
                        text-decoration: none;
                        padding: 12px 65px;
                        border: 1px solid;
                        background-color: #ff4f1d;
                        color:#fff;
                    }
        
                    .card-category-4 .sp-card-3 .cart-btn a {
                        text-decoration: none;
                        padding: 12px 53px;
                        border: 1px solid;
                        background-color: #ff4f1d;
                        color:#fff;
                    }
        
                    .card-category-4 .sp-card-3 .footer-card li:nth-child(1) {
                        display: inline-block;
                        padding-top: 30px;
                    }
        
                    .card-category-4 .sp-card-3 .footer-card li:nth-child(2) {
                        display: inline-block;
                        width: 55%;
                        text-align: right;
                    }
        
                        .card-category-4 .sp-card-3 .footer-card li:nth-child(2) span {
                            font-weight: 600;
                        }
                
                .card-category-4 .sp-card-3 ul {
                    padding:0px 10px 10px 10px;
                }        
        
                    .card-category-4 .sp-card-3 ul li img {
                        height:180px;
        
                        -webkit-transition: all .4s ease-in-out;
                        -moz-transition: all .4s ease-in-out;
                        -o-transition: all .4s ease-in-out;
                        transition: all .4s ease-in-out;
                    }
        
                        .card-category-4 .sp-card-3 ul li img:hover {
                            -webkit-transform: scale(0.90);
                            -moz-transform: scale(0.90);
                            -o-transform: scale(0.90);
                            transform: scale(2);
                        }
        
                    .card-category-4 .sp-card-3 .product-details .product-img {
                        width: 49%;
                        float: left;
                        padding-top: 20px;
                    }
        
                    .card-category-4 .sp-card-3 .product-details .product-description {
                        width: 50%;
                        text-align: right;
                    }
        
                        .card-category-4 .sp-card-3 .product-details .product-description a {
                            text-decoration: none;
                            color: #525252;
                        }
        
                        .card-category-4 .sp-card-3 .product-details .product-description ul li {
                            display: list-item;
                            font-size: 15px;
                            color: #585858;
                            direction: rtl;
                            line-height: 1.5;
                        }
        
            .card-category-5 .all-pr-cards {
                padding:0;
            }
        
            .card-category-5 .per-card-1 {
                text-align: center;
                width:250px;
                background-image: linear-gradient(#315386, #ffffff);
                
                -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                -moz-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                -o-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            }
            
            .card-category-5 .per-card-1 .card-image {
                padding:20px;
            }
            
                .card-category-5 .per-card-1 .card-image img {
                    height: 200px;
                }
        
                .card-category-5 .per-card-1 .card-content .card-title {
                    font-size: 20px;
                    padding-bottom:6px;
                }
        
                .card-category-5 .per-card-1 .card-content .per-position {
                    color: #002255;
                    padding-bottom: 10px;
                }
        
                .card-category-5 .per-card-1 .card-content .social-icons i {
                    font-size: 30px;
                    padding: 5px;
        
                    -webkit-transition: all .2s ease-in;
                    -moz-transition: all .2s ease-in;
                    -o-transition: all .2s ease-in;
                    transition: all .2s ease-in;
                }
        
                .card-category-5 .per-card-1 .card-content .social-icons i:hover {
                    color:#383838;
                }
        
                .card-category-5 .per-card-1 .card-content .card-btn button {
                    margin-top: 15px;
                    width: 100%;
                    padding: 15px;
                    background: black;
                    color: #fff;
                    border: none;
                    font-size: 18px;
                    cursor: pointer;
        
                    -webkit-transition: all .2s ease-in;
                    -moz-transition: all .2s ease-in;
                    -o-transition: all .2s ease-in;
                    transition: all .2s ease-in;
                }
        
                .card-category-5 .per-card-1 .card-content .card-btn button:hover {
                    background: #383838;
                }
        
        
                .card-category-5 .per-card-2 {
                    width: 300px;
                    padding: 30px 0 0 0;
                    margin:0 40px; /*You may have remove this CSS. I used this CSS for apply some margin from the card before*/
        
                    -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    -moz-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    -o-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                }
        
                    .card-category-5 .per-card-2 .card-image {
                        padding: 10px 15px;
                        background-image: linear-gradient(#3F51B5, #673AB7);
                        width: 319px;
                        position: relative;
                        right: 25px;
                    }
                        
                        .card-category-5 .per-card-2 .card-image::before {
                            content: '';
                            position: absolute;
                            width: 0px;
                            height: 0px;
                            border: 12px solid #430ca5;
                            top: -24px;
                            left: 0px;
                            border-left-color: transparent;
                            border-top-color: transparent;
                        }
        
                        .card-category-5 .per-card-2 .card-image::after {
                            content: '';
                            position: absolute;
                            width: 0px;
                            height: 0px;
                            border: 12px solid #430ca5;
                            top: 104px;
                            right: 0;
                            border-right-color: transparent;
                            border-bottom-color: transparent;
                        }
        
                        .card-category-5 .per-card-2 .card-image img {
                            border-radius: 40px;
                            height:80px;
                        }                
                    
                        .card-category-5 .per-card-2 .card-image ul {
                            padding:0;
                        }
        
                        .card-category-5 .per-card-2 .card-image .per-name {
                            font-size:23px;
                            color:#fff;
                            margin: 5px 0px 0px 10px;
                        }
        
                        .card-category-5 .per-card-2 .card-image .per-position {
                            font-size:18px;
                            color:#fff;
                            margin: 15px 0px 0px 15px;
                        }
        
                        .card-category-5 .per-card-2 .card-image .card-btn {
                            position: absolute;
                            width: 40px;
                            height: 40px;
                            top: 80px;
                            right: 40px;
                            border: 4px solid #fff;
                            border-radius: 30px;
                            background: #653cb7;
                            cursor:pointer;
        
                            -webkit-transform:rotate(0deg);
                            -moz-transform:rotate(0deg);
                            -o-transform:rotate(0deg);
                            transform:rotate(0deg);
        
                            -webkit-transition: all .3s ease-in-out;
                            -moz-transition: all .3s ease-in-out;
                            -o-transition: all .3s ease-in-out;
                            transition: all .3s ease-in-out;
                        }
        
                        .card-category-5 .per-card-2 .card-image .card-btn:hover {
                            -webkit-transform:rotate(90deg);
                            -moz-transform:rotate(90deg);
                            -o-transform:rotate(90deg);
                            transform:rotate(90deg);
                        }
        
                            .card-category-5 .per-card-2 .card-image .card-btn span, .card-category-5 .per-card-2 .card-image .card-btn span::after {
                                content: '';
                                width: 23px;
                                height: 3px;
                                background: #fff;
                                position: absolute;
                                top: 18px;
                                left: 8px;
                            }
        
                            .card-category-5 .per-card-2 .card-image .card-btn span::after {
                                left:0;
                                top:0;
                                
                                -webkit-transform: rotate(90deg);
                                -moz-transform: rotate(90deg);
                                -o-transform: rotate(90deg);
                                transform: rotate(90deg);
                            }
        
                    .card-category-5 .per-card-2 .card-content {
                        padding: 40px 30px 20px;
                        text-align: justify;
                    }
        
                        .card-category-5 .per-card-2 .card-content .card-text {
                            line-height: 1.5;
                            color: #585858;
                            font-size: 15px;
                        }
        
                        .card-category-5 .per-card-2 .card-content .social-icons {
                            text-align:center;
                            padding-top:20px;
                        }
        
                            .card-category-5 .per-card-2 .card-content .social-icons i {
                                padding:10px;
                                font-size:30px;
                                color: #430ca5;
                                cursor:pointer
                            }
        
                            .card-category-5 .per-card-2 .card-content .social-icons i:hover {
                                color:black;
                            }
        
                .card-category-5 .per-card-3 {
                    width: 400px;
                    height: 240px;
        
                    -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    -moz-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    -o-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                }
        
                .card-category-5 .per-card-3:hover .card-content .social-icons {
                    opacity: 1;
                    height: 100%;
                }
                
                .card-category-5 .per-card-3:hover .social-icons .card-btn {
                    bottom: 0px !important;
                    
                    -webkit-animation: down-btn 1.5s;
                    -moz-animation: down-btn 1.5s;
                    -o-animation: down-btn 1.5s;
                    animation: down-btn 1.5s;
                }
        
                    .card-category-5 .per-card-3 .card-image {
                        position:relative;
                        background: #009688;
                        padding-left: 20px;
                        text-align:left;
                    }
        
                        .card-category-5 .per-card-3 .card-image img {
                            height: 90px;
                            border-radius: 50px;
                            padding: 5px;
                            margin-right: 10px;
                        }
        
                        .card-category-5 .per-card-3 .card-image .per-name {
                            position: absolute;
                            top: 40%;
                            text-transform: uppercase;
                            letter-spacing: 7px;
                            font-size: 20px;
                            color: #fff;
                        }
                    
                    .card-category-5 .per-card-3 .card-content {
                        text-align: center;
                        padding: 20px;
                        position: relative;
                    }
        
                        .card-category-5 .per-card-3 .card-content .per-position {
                            font-size: 22px;
                            text-transform: uppercase;
                            letter-spacing: 4px;
                            color: #009688;
                        }
        
                        .card-category-5 .per-card-3 .card-content .card-text {
                            padding: 10px;
                        }
                            
                            .card-category-5 .per-card-3 .card-content .card-text span {
                                font-size: 13px;
                                color: #007368;
                            }
        
                        .card-category-5 .per-card-3 .card-content .social-icons {
                            position: absolute;
                            top: 0;
                            width: 100%;
                            left: 0;
                            opacity: 0;
                            height: 0%;
                            background: #009688;
                            border-top: 1px solid #5eada5;
                            cursor: pointer;
        
                            -webkit-transition: all .5s ease-in-out;
                            -moz-transition: all .5s ease-in-out;
                            -o-transition: all .5s ease-in-out;
                            transition: all .5s ease-in-out;
                        }
        
                            .card-category-5 .per-card-3 .card-content .social-icons i {
                                margin: 15px;
                                font-size:30px;
                                color: #fff;
                                cursor:pointer;
        
                                -webkit-transition: all .3s ease-in-out;
                                -moz-transition: all .3s ease-in-out;
                                -o-transition: all .3s ease-in-out;
                                transition: all .3s ease-in-out;
                            }
        
                            .card-category-5 .per-card-3 .card-content .social-icons i:hover {
                                -webkit-transform: scale(2);
                                -moz-transform: scale(2);
                                -o-transform: scale(2);
                                transform: scale(2);
                            }
                            
                            .card-category-5 .per-card-3 .card-content .social-icons .card-btn {
                                position: absolute;
                                bottom: 10px;
                                text-align: center;
                                width: 100%;
                            }
        
                                .card-category-5 .per-card-3 .card-content .social-icons .card-btn button {
                                    cursor: pointer;
                                    width: 100%;
                                    padding: 15px;
                                    font-size: 18px;
                                    color: #fff;
                                    background: #03695f;
                                    border: none;
                                }
        
        
        @media only screen and (max-width: 480px) {
            .io-card-1 .card-content .card-text {
                display: none;
            }
        
            .io-card-1 .card-link {
                top:85px;
            }
        
            .card-category-4 .sp-card-1 {
                height: 100%;
                width: 100%;
                text-align: center;
                padding: 0 0px 30px 0;
                margin: 30px 0;
            }
        
                .card-category-4 .sp-card-1 .shop-button {
                    padding: 0;
                }
        
                .card-category-4 .sp-card-1 ul li:nth-child(1) {
                    padding: 20px;
                    float: none;
                }
        
                .card-category-4 .sp-card-1 ul li:nth-child(2) {
                    text-align: center;
                    padding: 0 0 30px 0;
                    float: none;
                }
        
            .card-category-4 .sp-card-2 {
                width: 300px;
            }
        
            .card-category-4 .sp-card-3 {
                width: 100%;
                height:auto;
            }
        
            .card-category-4 .sp-card-3 .card-title {
                text-align: center;
                width: 100%;
                float: none;
            }
        
            .card-category-4 .sp-card-3 .product-details .product-img {
                width: 100%;
                float: none;
                padding-top: 10px;
                display: block;
            }
        
                .card-category-4 .sp-card-3 .product-details .product-img img {
                    height: auto;
                    width: 90%;
                }
        
            .card-category-4 .sp-card-3 .product-details .product-description {
                width: 100%;
                padding: 20px 0px;
            }
        
                .card-category-4 .sp-card-3 .product-details .product-description ul {
                    text-align: center;
                }
                
                    .card-category-4 .sp-card-3 .product-details .product-description ul li {
                        font-size: 25px;
                    }
                    
                    .card-category-4 .sp-card-3 .product-details .product-description ul li:last-child {
                        text-decoration: underline;
                        padding-top: 20px;
                    }
                
                .card-category-4 .sp-card-3 .footer-card p {
                    font-size: 20px;
                }
        
                .card-category-4 .sp-card-3 .footer-card li:nth-child(1) {
                    padding-top: 5px;
                }
        
                .card-category-4 .sp-card-3 .footer-card li:nth-child(2) {
                    width: 100%;
                    padding: 30px 0;
                    text-align: center;
                }
        
                .card-category-4 ul li:nth-child(3) { 
                    margin-top: 25px;
                    padding: 0 15px;
                }
        
                .card-category-5 .per-card-2 {
                    margin: 20px 40px;
                }
        
                .card-category-5 .per-card-3 {
                    width: 350px;
                }
        
                    .card-category-5 .per-card-3 .card-image .per-name {
                        letter-spacing: 4px;
                    }
        }
        
        @media only screen and (max-width: 360px) {
            .ioverlay-card .card-content {
                top: 10px;
            }
        
            .io-card-1 .card-link {
                top: 70px;
            }
        
            .card-category-5 .per-card-2 {
                width: 275px;
            }
        
                .card-category-5 .per-card-2 .card-image {
                    width: 295px;
                }
        
            .card-category-5 .per-card-3 {
                width: 320px;
                height: 254px;
            }
        }
           </style>
        </head>
    
        <body>
                
            <div class="category-name">Basic Cards</div> <br/>
                
            <div class="card-category-1">
                
                <div class="basic-card basic-card-aqua">
                    <div class="card-content">
                        <span class="card-title">Card Title</span>
                        <p class="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
    
                    <div class="card-link">
                        <a href="#" title="Read Full"><span>Read Full</span></a>
                    </div>
                </div>
    
                <div class="basic-card basic-card-lips">
                    <div class="card-content">
                        <span class="card-title">Card Title</span>
                        <p class="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
    
                    <div class="card-link">
                        <a href="#" title="Read Full"><span>Read Full</span></a>
                    </div>
                </div>
    
                <div class="basic-card basic-card-light">
                    <div class="card-content">
                        <span class="card-title">Card Title</span>
                        <p class="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
    
                    <div class="card-link">
                        <a href="#" title="Read Full"><span>Read Full</span></a>
                    </div>
                </div>
    
                <div class="basic-card basic-card-dark">
                    <div class="card-content">
                        <span class="card-title">Card Title</span>
                        <p class="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
    
                    <div class="card-link">
                        <a href="#" title="Read Full"><span>Read Full</span></a>
                    </div>
                </div>
                
            </div>
            
            <br/>
            
            
            <!-- Image Cards -->
            <div class="card-category-2">
                
                <span class="category-name">Image Cards</span> <br/><br/>
                
                <ul>
                    <li>
                        <div class="img-card iCard-style1">
                            <div class="card-content">
                                <div class="card-image">
                                    <span class="card-title">Cloud Beauty</span>
                                    <img src="https://www.dropbox.com/s/u330jm6faybxrvb/fog-3461451_640.jpg?raw=1"/>
                                </div>
                                
                                <div class="card-text">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Image by <a href="https://pixabay.com/users/Hans-2/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461451" style="color:#795548">Hans Braxmeier</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461451" style="color:#795548">Pixabay</a>
                                    </p>
                                </div>
                                
                            </div>
                            
                            <div class="card-link">
                                <a href="#" title="Read Full"><span>Read Full</span></a>
                            </div>
                        </div>                    
                    </li>
                    
                    <li>
                        <div class="img-card iCard-style2">
                            <div class="card-content">
                                <div class="card-image">
                                    <span class="card-caption">Image Caption</span>
                                    <img src="https://www.dropbox.com/s/63v40eqeq9lgz3k/bald-eagle-2715461_640.jpg?raw=1"/>
                                </div>
                                
                                <span class="card-title">Card Title</span>
                                
                                <div class="card-text">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Image by <a href="https://pixabay.com/users/moonzigg-6341937/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2715461" style="text-decoration: none">moonzigg</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2715461" style="text-decoration: none">Pixabay</a>
                                    </p>
                                </div>
                                
                            </div>
                            
                            <div class="card-link">
                                <a href="#" title="Read Full"><span>Read Full</span></a>
                            </div>
                        </div>                    
                    </li>
                    
                    <li>
                        <div class="img-card iCard-style3">
                            <div class="card-content">
                                <div class="card-image">
                                    <span class="card-title">World Map</span>
                                    <img src="https://www.dropbox.com/s/tclqbz7o4u8e705/ipad-632394_640.jpg?raw=1"/>
                                </div>
                                
                                <div class="card-text">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Image by <a href="https://pixabay.com/users/FirmBee-663163/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=632394" style="text-decoration:none">William  Iven</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=632394" style="text-decoration:none">Pixabay</a>
                                    </p>
                                </div>
                                
                            </div>
                            
                            <div class="card-link">
                                <a href="#" title="Read Full">
                                    <span>Go To Link</span>
                                </a>
                            </div>
                        </div>                    
                    </li>
        
                    <li>
                        <div class="img-card iCard-style4">
                            <div class="card-content">
                                <div class="card-image">
                                    <span class="card-caption">Image Caption</span>
                                    <img src="https://www.dropbox.com/s/ldjzn4dwz13m3vb/pomegranate-3383814_640.jpg?raw=1"/>
                                </div>
            
                                <div class="card-title"><span>The Title</span></div>
                                <br/>
                                <div class="toggle" onclick="showText(this)">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
            
                                <div class="card-text">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Image by <a href="https://pixabay.com/users/megspl-8890573/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3383814" style="text-decoration: none">megspl</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3383814"style="text-decoration: none">Pixabay</a>
                                    </p>
                                </div>
                                
                            </div>
                            
                            <div class="card-link">
                                <a href="#" title="Read Full">
                                    <span>Read More Link</span>                        
                                </a>
                            </div>
                        </div>                    
                    </li>
                </ul>
    
            </div>
            
            <br/>
            
            <!-- Image Overlay Cards -->
            <div class="card-category-3">
                
                <span class="category-name">Overlay Image Cards</span> <br/><br/>     
                
                <ul>
                    <li>
                        <div class="ioverlay-card io-card-1">
                            <div class="card-content">
                                <span class="card-title">Light of Ocean</span>
                                <p class="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Image by <a href="https://pixabay.com/users/Mariamichelle-165491/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=685303" style="text-decoration:none; color:#fff">Michelle Maria</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=685303"style="text-decoration:none; color:#fff">Pixabay</a>
                                </p>                            
                            </div>             
                            <span class="card-link">
                                <a href="#" title="Read Full"> This is a Link </a>
                            </span>
                            <img src="https://www.dropbox.com/s/360d3xgejuncx7l/bora-bora-685303_1280.jpg?raw=1"/>
                        </div>
                        
                    </li>
    
                    <li>
                        <div class="ioverlay-card io-card-2">
                            <div class="card-content">
                                <span class="card-title">Card Title</span>
                                <p class="card-text">
                                    Image by <a href="https://pixabay.com/users/1195798-1195798/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4296784"style="text-decoration: none;color:#fff">1195798</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4296784"style="text-decoration: none;color:#fff">Pixabay</a>                        
                                </p>                        
                            </div>       
                            <span class="card-link">
                                <a href="#" title="Read Full">
                                    <span>This is a Link</span>                        
                                </a>
                            </span>
                            <img src="https://www.dropbox.com/s/lsxxizyph3ic7zb/frog-4296784_640.jpg?raw=1"/>
                        </div>                    
                    </li>
                </ul>            
    
            </div>
            
            <br/>
    
            <!-- Product & Shop Cards-->
            <div class="card-category-4">
                
                <span class="category-name">Product and Shop Cards</span> <br/><br/>
                
                <ul>
                    <li>
                        <div class="sp-card-1">
                            <ul>
                                <li>
                                    <div class="card-title">Trending Shoes For You</div>
                                    <div class="sub-line">7 Colors in each Sport Pair</div>
                                    <span class="off-label">UP TO 65% OFF</span>
                                    <div class="return-line">15 Days Return and Replacement<br/>
                                        <span style="font-size: 10px">Image by <a href="https://pixabay.com/users/OpenClipart-Vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=153310" style="color: #fff">OpenClipart-Vectors</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=153310"style="color: #fff">Pixabay</a></span></div>
                                </li>
                                <li>
                                    <div>
                                    <img src="https://www.dropbox.com/s/pq93246lri9nb7m/chucks-153310_640.png?raw=1"/></div>
                                    <div class="price-start">Start From $35</div>                                
                                </li>
                            </ul>
                            <span class="shop-button">
                                <a href="#" title="Click for Shop Now">SHOP NOW</a>
                            </span>                        
                        </div>                    
                    </li>
    
                    <li>
                        <div class="sp-card-2">
                            <div class="overlap">
                                <a href="#" title="View Details">View Details</a>
                            </div>
                            <div class="card-image">
                                <img src="https://www.dropbox.com/s/sxwzjltdlviw6ra/blank-1886008_640.png?raw=1"/>                            
                            </div>
    
                            <div class="card-content">
                                <span class="card-title">Nike Round</span>
                                <span class="price-start">$99</span>
                                <div class="card-caption">
                                    Solid Men Round Neck<br/> 100% Pure Cotton<br/>
                                    <span style="font-size: 10px">Image by <a href="https://pixabay.com/users/nattyjeff-1836617/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1886008" style="text-decoration: none;color:#717171">jeff burroughs</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1886008" style="text-decoration: none;color:#717171">Pixabay</a></span>
                                </div>
                                <div class="cloth-size">
                                    <span><b>Sizes:</b> </span>
                                    <span><b>S, M, L, XL</b></span>                                
                                </div>
                                <div class="cloth-colors">
                                    <span><b>Colors:</b> </span>
                                    <span class="color1"></span>
                                    <span class="color2"></span>
                                    <span class="color3"></span>
                                    <span class="color4"></span>
                                </div>
                            </div>
                        </div>
                    </li>
    
                    <li>
                        <div class="sp-card-3">
                                
                            <div class="card-title">Camera 25 MP</div>
    
                            <ul class="product-details">
                                <li class="product-img">
                                    <img src="https://www.dropbox.com/s/xjjomt5hmc99nql/camera-32871_640.png?raw=1"/>                                
                                </li>
    
                                <li class="product-description">
                                    <ul>
                                        <li>
                                            <b>Type:</b> DSLR
                                        </li>
                                        <li>
                                            <b>Recording:</b> 1080P
                                        </li>
                                        <li>
                                            <b>FPS:</b> 80
                                        </li>
                                        <li>
                                            <b>Wifi, Bluetooth</b>
                                        </li>
                                        <li>
                                            <b>Long Life Battery</b>
                                        </li>
                                        <li>
                                            <a href="#" title="Description">See Full Description</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            
                            <ul class="footer-card">
                                <li>
                                    <div class="buy-btn"><a href="#" title="Buy Now">Buy Now</a></div>
                                    <div class="cart-btn"><a href="#" title="Add To Cart">Add To Card</a></div>
                                </li>
    
                                <li>
                                    <p>
                                        This product comes with two years of warrenty. This camera is best suitable for personal and professional use.                        
                                    </p>
                                    <span> Available on EMI </span>
                                </li>
                            </ul>                       
                            
                        </div>
                    </li>
    
                </ul>
    
            </div>
            
            <br/>
    
            <!-- Personal Cards </ul> -->
            <div class="card-category-5">
                <div class="category-name">Personal Cards</div> <br/><br/>
    
                <ul class="all-pr-cards">
                    <li>
                        <div class="per-card-1">
                            <div class="card-image">
                                <img src="https://www.dropbox.com/s/kv60gxvmfv2nwmd/profile-2092113_640.png?raw=1">
                            </div>
    
                            <div class="card-content">
                                <div class="card-title">Mark Methew</div>
                                <div class="per-position">Senior Designer</div>
                                <div class="social-icons">
                                    <i class="fab fa-linkedin-in" title="LinkedIn"></i>
                                    <i class="fab fa-twitter" title="Twitter"></i>
                                    <i class="fab fa-facebook-f" title="Facebook"></i>
                                </div>
                                <div class="card-btn">
                                    <button type="button" title="Send Message">Send Message</button>
                                </div>                            
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <div class="per-card-2">
                            <div class="card-image">
                                <ul>
                                    <li><img src="https://www.dropbox.com/s/tcf4pyscta9pt13/jigneshpanchal.JPG?raw=1"/></li>
                                    <li>
                                        <div class="per-name">Jignesh Panchal</div>
                                        <div class="per-position">Founder & CEO</div>
                                        <a class="card-btn" title="Connect">
                                            <span></span>
                                        </a>
                                    </li>
                                </ul>                          
                            </div>
    
                            <div class="card-content">
                                <div class="card-text">
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                                </div>
    
                                <div class="social-icons">
                                    <i class="fab fa-linkedin-in" title="LinkedIn"></i>
                                    <i class="fab fa-twitter" title="Twitter"></i>
                                    <i class="fab fa-facebook-f" title="Facebook"></i>
                                    <i class="fab fa-whatsapp" title="WhatsApp"></i>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <div class="per-card-3">
                            <div class="card-image">
                                <span></span>
                                <img src="https://www.dropbox.com/s/hdwp9fet5mfcd6x/girl-919048_640.jpg?raw=1"/>
                                <!--Image by <a href="https://pixabay.com/users/Free-Photos-242387/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=919048">Free-Photos</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=919048">Pixabay</a>-->
                                <span class="per-name">Nikki Thomas</span>
                            </div>
    
                            <div class="card-content">
                                <span class="per-position">Project Manager</span>
                                <div class="card-text">
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                                </div>
                                <div class="social-icons">
                                    <i class="fab fa-linkedin-in" title="LinkedIn"></i>
                                    <i class="fab fa-twitter" title="Twitter"></i>
                                    <i class="far fa-envelope" title="E-Mail"></i>
                                    <i class="fab fa-facebook-f" title="Facebook"></i>
                                    <i class="fab fa-whatsapp" title="WhatsApp"></i>
                                    <div class="card-btn">
                                        <button type="button" title="Connect">Connect</button>
                                    </div>                                
                                </div>
                            </div>                  
                        </div>
                    </li>
                </ul>
            </div>
    
            <script>
            
            function showText(toggleText) {
                toggleText.classList.toggle("active");
            }
            </script>
        </body>
    </html>
    
    `





response.write(code)

response.end()
})


server.listen(8080)