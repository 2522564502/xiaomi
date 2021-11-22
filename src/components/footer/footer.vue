<template>
    <div class="footer">
        <ul>
            <li>
                <router-link to="/">
                <div>
                    <img src="@/assets/tab_images.png" alt="">
                </div>
                <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link to="/classify">
                <div>
                    <img src="@/assets/tab_images.png" alt="">
                </div>
                <p>分类</p>
                </router-link>
            </li>
            <li>
                <router-link to="/more">
                <div>
                    <img src="@/assets/tab_images.png" alt="">
                </div>
                <p>购物车</p>
                </router-link>
            </li>
            <li>
                <router-link to="/my">
                <div>
                    <img src="@/assets/tab_images.png" alt="">
                </div>
                <p>我的</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.footer{
    height: .5rem;
    width: 3.75rem;
    background: #fff;
    padding: .1rem 0 0;
    position: fixed;
    bottom: 0;
    z-index: 9;
    ul{
        display: flex;
        justify-content: space-between;
        li{
            width: 25%;
            height: .5rem;
            div{
                width: 50%;
                height: 46%;
                margin: auto;
                overflow: hidden;
                position: relative;
                img{
                    width: 50%;
                    margin: auto;
                    position: absolute;
                    left: 50%;
                    transform:translateX(-50%);
                }
            }
            p{
                text-align: center;
                color: rgb(102, 102, 102);
                font-size: .12rem;
            }
        }
        li:nth-child(1){
            div{
                img{
                    top: 0;
                }
            }
        }
        li:nth-child(2){
            div{
                img{
                    top: -0.46rem;
                }
            }
        }
        li:nth-child(3){
            div{
                img{
                    top: -0.93rem;
                }
            }
        }
        li:nth-child(4){
            div{
                img{
                    top: -1.87rem;
                }
            }
        }
    }
}
</style>
