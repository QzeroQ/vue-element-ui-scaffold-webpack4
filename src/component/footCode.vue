<template>
    <footer style="color: #606266;font-size: 10px;margin-top: 200px;">
        <i>Github source code：</i>
        <a href="https://github.com/hzsrc/vue-element-ui-scaffold-webpack4" target="_blank">
            vue-element-ui-scaffold-webpack4
        </a>
        <el-button @click="showTest">Test</el-button>
    </footer>
</template>

<script>
    import Vue from 'vue';
    import {Button} from 'element-ui';

    Vue.use(Button)

    export default {
        methods: {
            showTest() {
                this.$x.toast('ok')
            }
        }
    }
</script>

