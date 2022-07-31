<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="loading fixed left-0 top-0 h-screen w-screen flex justify-center items-center bg-gray-700">
        <div class="loader-container">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loader-container {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    -webkit-animation: rotation 1s infinite;
    animation: rotation 1s infinite;
}
.loader-container .shape {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 5px;
}
.loader-container .shape.shape-1 {
    left: 0;
    background-color: #4285f4;
}
.loader-container .shape.shape-2 {
    right: 0;
    background-color: #34a853;
}
.loader-container .shape.shape-3 {
    bottom: 0;
    background-color: #fbbc05;
}
.loader-container .shape.shape-4 {
    bottom: 0;
    right: 0;
    background-color: #ea4335;
}
.loader-container .shape-1 {
    -webkit-animation: shape1 0.5s infinite alternate;
    animation: shape1 0.5s infinite alternate;
}
.loader-container .shape-2 {
    -webkit-animation: shape2 0.5s infinite alternate;
    animation: shape2 0.5s infinite alternate;
}
.loader-container .shape-3 {
    -webkit-animation: shape3 0.5s infinite alternate;
    animation: shape3 0.5s infinite alternate;
}
.loader-container .shape-4 {
    -webkit-animation: shape4 0.5s infinite alternate;
    animation: shape4 0.5s infinite alternate;
}

@-webkit-keyframes rotation {
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes rotation {
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@-webkit-keyframes shape1 {
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    to {
        -webkit-transform: translate(20px, 20px);
        transform: translate(20px, 20px);
    }
}
@keyframes shape1 {
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    to {
        -webkit-transform: translate(20px, 20px);
        transform: translate(20px, 20px);
    }
}
@-webkit-keyframes shape2 {
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    to {
        -webkit-transform: translate(-20px, 20px);
        transform: translate(-20px, 20px);
    }
}
@keyframes shape2 {
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    to {
        -webkit-transform: translate(-20px, 20px);
        transform: translate(-20px, 20px);
    }
}
@-webkit-keyframes shape3 {
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    to {
        -webkit-transform: translate(20px, -20px);
        transform: translate(20px, -20px);
    }
}
@keyframes shape3 {
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    to {
        -webkit-transform: translate(20px, -20px);
        transform: translate(20px, -20px);
    }
}
@-webkit-keyframes shape4 {
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    to {
        -webkit-transform: translate(-20px, -20px);
        transform: translate(-20px, -20px);
    }
}
@keyframes shape4 {
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    to {
        -webkit-transform: translate(-20px, -20px);
        transform: translate(-20px, -20px);
    }
}
</style>