<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?= $judul ?>
    </title>

    <link rel="stylesheet" href="<?= base_url() ?>assets/css/style.css?>">
    <script src="<?= base_url() ?>assets/js/script.js" defer></script>
    <!-- CSS External -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

</head>

<body>

    <!-- TAB BAR -->
    <nav class="tabbar">
        <div>
            <input id="menu-1" type="radio" name="menu" checked>
            <label onclick="openTab(event,'tab-profile')" for="menu-1">
                <div class="roundedIcon">
                    <svg>
                        <use xlink:href="#profileIcon">
                    </svg>
                </div>
                <!-- <img src="assets/images/logo profile.png" alt=""> -->
                <span>Profile</span>
            </label>
            <input id="menu-2" type="radio" name="menu">
            <label onclick="openTab(event,'tab-information')" for="menu-2">
                <div class="roundedIcon">
                    <svg>
                        <use xlink:href="#informationIcon">
                    </svg>
                </div>
                <!-- <img src="assets/images/logo informasi.png" alt=""> -->
                <span>Information</span>
            </label>
            <span></span>
        </div>
    </nav>
    <!-- END TAB BAR -->