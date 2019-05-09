<template>
    <div class="vi-chart-loading">
        <div class="loader">
            <div class="loading-spinner">
                <svg class="circular" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none"
                            stroke-linecap="round"
                            stroke="#20a0ff"
                            stroke-width="2"
                            stroke-offset="0"
                            stroke-dasharray="60,120">
                    </circle>
                </svg>
            </div>
        </div>
    </div>
</template>
<style>
    .vi-chart-loading {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, .9);
    }
    .vi-chart-mask-status {
        filter: blur(1px);
    }
    .vi-chart-loading .circular {
        width: 48px;
        height: 48px;
        animation: loading-rotate .8s linear infinite;
    }
    @keyframes loading-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
</style>
