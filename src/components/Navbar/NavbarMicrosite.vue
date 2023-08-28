<template>
    <header class="pgd-header sticky-top" id="navbarMicrosite">
        <nav class="navbar navbar-expand-lg navbar-light container">
            <a class="navbar-brand mr-auto" href="#">
                <img src="/assets/images/microsite-p4-logo.svg" alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon hided"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                            aria-expanded="false">
                            Simulasi Kredit <i class="icon-down"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Cicil Kendaraan</a>
                            <a class="dropdown-item" href="#">Pinjaman Serbaguna</a>
                            <a class="dropdown-item" href="#">Pengajuan KUR</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Cek Pengajuan</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>
    export default {
        name: {
            type: "k-navbar-microsite",
        },
        props: {
            image: {
            type: String,
            default:
                "./assets/images/microsite-p4-logo.svg",
            }
        }
    };
</script>
<style lang=""></style>