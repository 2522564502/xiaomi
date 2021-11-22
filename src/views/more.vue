<template>
  <div>
    <div class="header">
      <!-- -------------------------------轮播图-------------------------------------------- -->

      <div class="header1">
        <img src="../assets/img/1.webp" alt="" />
      </div>
      <!-- --------------------------------------轮播下大框-------------------------------------- -->
      <div class="header-top1">
        <!-- ----------------------------倒计时----------------------------------- -->
        <div class="header-djs">
          <div class="header-yp">
            <div class="ypms">
              <p>有品</p>
              <p>秒杀</p>
            </div>
            <div class="price">
              <span>￥</span>
              <span>38</span>
            </div>
          </div>
          <div class="djs_img">
            <img src="../assets/img/1.jpg" alt="" />
          </div>
          <div id="header-yp_right">
            <div class="djs_dt">
              <div class="djs_djs">
                <p>距开始:{{ count }}</p>
              </div>
              <div class="djs_djs1">
                <p>离本场结束还有</p>
              </div>
            </div>
            <div class="djs_qw">
              <!-- > -->
              〉
            </div>
          </div>
        </div>
        <!-- ---------------------------------价格---------------------------------- -->
        <div class="header_pice">
          <div class="header-pice_left">
            <div class="header-pice-top">
              <span>￥</span>
              <span>299</span>
            </div>
            <div class="header-pice-bottom">
              <span>￥399</span>
            </div>
          </div>
          <div class="header-pice_right">
            <img src="../assets/img/14.png" alt="" />
          </div>
        </div>
        <!-- ---------------------------智能感应--------------------------------- -->
        <div class="header-zngy">
          <div class="header-vip">
            <img
              src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/product/vip_icon.png"
              alt=""
            />
          </div>
          <div class="header-vip1">开通后享会员券后价￥259</div>
          <div class="header-vip2">立即开通</div>
        </div>
        <!-- -------------------------------------智能优点------------------------------------- -->
        <div class="header-zngy_yd">
          <div class="header-ypjs">F.MATE零感真皮手工休闲鞋 男 39 沙色</div>
          <ul class="header-ypjs1">
            <li>①头层牛皮，舒适透气</li>
            <li>②弹性鞋带设计，免系带，方便穿脱</li>
            <li>③轻软合脚</li>
          </ul>
        </div>
        <div class="header_zngy-dz"></div>
        <div class="header_zngy_kbdy"></div>
        <div class="header-yhq">
          <img
            src="https://img.youpin.mi-img.com/youpinoper/22db3e4bd467464def0c2611b0abd075.png?w=996&h=108"
            alt=""
          />
        </div>
      </div>
      <!-- top -->
      <div class="header-xzps">
        <div class="header-xzps_1">
          <div class="yx">已选</div>
          <div class="gmwp">
            <div class="gmwp_1">男39沙色<span>×1</span><span> ></span></div>
            <div class="header-xgt">
              <div class="xgt1">
                <img
                  src="https://img.youpin.mi-img.com/shopmain/f17d9367abc68eff3661b97dc9967ac2.png?w=800&h=800"
                  alt=""
                />
              </div>
              <div class="xgt1">
                <img
                  src="https://img.youpin.mi-img.com/shopmain/55ff6bf8cd7fec667fc799718d140279.png?w=800&h=800"
                  alt=""
                />
              </div>
              <div class="xgt1">
                <img
                  src="https://img.youpin.mi-img.com/shopmain/a33dc853503ef7757ac6155c528e1582.png?w=800&h=800"
                  alt=""
                />
              </div>
              <div class="xgt2">共三种颜色可选</div>
            </div>
          </div>
        </div>
        <div class="header-psdz">
          <div class="yx">送至</div>
          <div class="header-psdz1">
            <span>北京北京市海淀区清河街道</span> >
            <span>有品配送</span>
            <span>有货</span>
            <span>, 24:00前支付，预计明天（11</span><br />
            <span class="header-bh"
              >月20日)发货。受交通管制影响，你的订单可</span
            >
            <br />
            <span class="header-bh">能会延迟派送</span>
          </div>
        </div>
        <div class="byth">
          <div class="yqwz">
            <div class="yqwz_img">
              <img
                src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/icons/icon_checkbox_check_pale_brown.png"
                alt=""
              />
            </div>
            <span> 满99包邮</span>
          </div>
          <div class="yqwz">
            <div class="yqwz_img">
              <img
                src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/icons/icon_checkbox_check_pale_brown.png"
                alt=""
              />
            </div>
            <span>三方店铺</span>
          </div>
          <div class="yqwz">
            <div class="yqwz_img">
              <img
                src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/icons/icon_checkbox_check_pale_brown.png"
                alt=""
              />
            </div>
            <span> 7天无理由</span>
          </div>
          <div class="yqwz">
            <div class="yqwz_img">
              <img
                src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/icons/icon_checkbox_check_pale_brown.png"
                alt=""
              />
            </div>
            <span>有品配送 <span>></span></span>
          </div>
        </div>
      </div>
      <div class="header_zngy_kbdy1"></div>
      <div class="header-plq">
        <div class="header-yhgx">
          <div class="header-yhgx-left">用户评价(24)</div>
          <div class="header-yhgx-right">查看全部 ></div>
        </div>
        <div class="header-pljx">
          <div class="header-pljx1">
            <div class="header-pljx11">有图(1)</div>
            <div class="header-pljx11">好评(1)</div>
            <div class="header-pljx11">价格实惠(1)</div>
          </div>
          <div class="header-pljx2">
            <div class="header-pljx21">用料扎实(3)</div>
            <div class="header-pljx21">做工精湛(1)</div>
            <div class="header-pljx21">质感极佳(2)</div>
          </div>
        </div>
        <div class="sfz-wz">
          <div class="sfz-wz1">
            <div class="sfz-tx">
              <img
                src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/user_default_avatar.png"
                alt=""
              />
            </div>
            <div class="sfz-gm">
              <p>大**烟</p>
              <p>已选:男、41、黑色</p>
            </div>
          </div>
          <div class="header-ml">
            <p>用料扎实，穿着轻便舒适。</p>
          </div>
        </div>
        <div class="header-ckpl">查看全部评价</div>
      </div>
      <div class="zwwd">
        <div class="zwwd-left">
          <p>暂无问答</p>
          <div class="zwwd-bottom">
            <div class="wh">
              <img
                src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/product/askothers_noask.png"
                alt=""
              />
            </div>
            <span>宝贝好不好，问问已买过的人</span>
          </div>
        </div>
        <div class="zwwd-right">去提问</div>
      </div>
      <div class="header-jrdp">
        <img src="../assets/img/01.png" alt="" />
      </div>
      <div class="header-xghw">
        <div class="header-xghw1">
          <div class="header-xghw2">相关好物</div>
          <div class="header-xghw2">店铺热销</div>
        </div>
        <div class="header-zs">
          <div class="header-zs1">
            <div class="zs11">
              <div class="zs-img">
                <img
                  src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg@base@tag=imgScale&F=webp&w=339&h=360"
                  alt=""
                />
              </div>
              <div class="pp">防泼水抗菌休闲鞋</div>
              <p>￥99</p>
            </div>
            <div class="zs11">
              <div class="zs-img">
                <img
                  src="https://img.youpin.mi-img.com/shopmain/e7e4ad421c4bbdfa0bbdae9d9f4b51c4.jpg@base@tag=imgScale&F=webp&w=339&h=360"
                  alt=""
                />
              </div>
              <div class="pp">牛皮休闲鞋</div>
              <p>￥99</p>
            </div>
            <div class="zs11">
              <div class="zs-img">
                <img
                  src="https://img.youpin.mi-img.com/shopmain/39255ad5eb089144e8ef91dfbc64421b.jpg@base@tag=imgScale&F=webp&w=339&h=360"
                  alt=""
                />
              </div>
              <div class="pp">牛皮拼接爆米花鞋</div>
              <p>￥599</p>
            </div>
          </div>
          <div class="header-zs1">
            <div class="zs11">
              <div class="zs-img">
                <img
                  src="https://img.youpin.mi-img.com/shopmain/acd02e4c1932a41a2841032dd8668df7.jpg@base@tag=imgScale&F=webp&w=339&h=360"
                  alt=""
                />
              </div>
              <div class="pp">手工定制皮鞋</div>
              <p>￥399</p>
            </div>
            <div class="zs11">
              <div class="zs-img">
                <img
                  src="https://img.youpin.mi-img.com/shopmain/7f217f5ec9d7b324e0e794d6204cec8f.jpg@base@tag=imgScale&F=webp&w=339&h=360"
                  alt=""
                />
              </div>
              <div class="pp">手工定制皮鞋</div>
              <p>￥299</p>
            </div>
            <div class="zs11">
              <div class="zs-img">
                <img
                  src="https://img.youpin.mi-img.com/shopmain/4e3457fe474e4b4398b66574862b39fb.jpg@base@tag=imgScale&F=webp&w=339&h=360"
                  alt=""
                />
              </div>
              <div class="pp">手工定制皮鞋</div>
              <p>￥199</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cl"></div>
      <div class="spxqy">
        <div class="spxqy1">商品详情</div>
      </div>
      <div class="xqy_img">
        <img
          src="https://img.youpin.mi-img.com/shopmain/100726384062d81aecd4da75f2badbaa.jpg?w=1080&h=758"
          alt=""
        />
      </div>
      <div class="xqy_img1">
        <img
          src="https://img.youpin.mi-img.com/shopmain/80628b59317f05da0f5757750a65d966.jpg?w=1080&h=770"
          alt=""
        />
      </div>
      <div class="xqy_img2">
        <img
          src="https://img.youpin.mi-img.com/shopmain/526c63463f5c5d75157b5d86539d775d.jpg?w=1080&h=805"
          alt=""
        />
      </div>
      <div class="xqy_img3">
        <img
          src="https://img.youpin.mi-img.com/shopmain/997c4581508477c6ee8f8ce34fc367fb.jpg?w=1080&h=833"
          alt=""
        />
      </div>
      <div class="xqy_img4">
        <img
          src="https://img.youpin.mi-img.com/shopmain/5eb8a26c28c59b201ec4cd0f75170506.jpg?w=1080&h=737"
          alt=""
        />
      </div>
      <div class="xqy_img5">
        <img
          src="https://img.youpin.mi-img.com/shopmain/1d8641cd3131c07602cd93759fc4b589.jpg?w=1080&h=786"
          alt=""
        />
      </div>
      <div class="xqy_img6">
        <img
          src="https://img.youpin.mi-img.com/shopmain/51075c63dab961c0d060639f886f4138.jpg?w=1080&h=773"
          alt=""
        />
      </div>
      <div class="xqy_img7">
        <img
          src="https://img.youpin.mi-img.com/shopmain/cfc72b2022d4a58d79ac19ce35546170.jpg?w=1080&h=624"
          alt=""
        />
      </div>
      <div class="xqy_img8">
        <img
          src="https://img.youpin.mi-img.com/shopmain/59e8748f6a0b0276f994f532df3d19a3.gif?w=1080&h=1290"
          alt=""
        />
      </div>
      <div class="xqy_img9">
        <img
          src="https://img.youpin.mi-img.com/shopmain/12b8b179db60772ec72657303a7d8c54.jpg?w=1080&h=802"
          alt=""
        />
      </div>
      <div class="xqy_img10">
        <img
          src="https://img.youpin.mi-img.com/shopmain/598f669c2faaaa78ae5e85073454e0bd.jpg?w=1080&h=766"
          alt=""
        />
      </div>
      <div class="xqy_img11">
        <img
          src="https://img.youpin.mi-img.com/shopmain/2a077296a507d4aedfa6780df1798d3a.jpg?w=1080&h=732"
          alt=""
        />
      </div>
      <div class="xqy_img12">
        <img
          src="https://img.youpin.mi-img.com/shopmain/0317dab360024cb5f204166e6486f3bf.jpg?w=1080&h=836"
          alt=""
        />
      </div>
      <div class="xqy_img10">
        <img
          src="https://img.youpin.mi-img.com/shopmain/85d5f0a401a95c3791e59306819933ea.jpg?w=1080&h=739"
          alt=""
        />
      </div>
      <div class="xqy_img13">
        <img
          src="https://img.youpin.mi-img.com/shopmain/6f6b2d7ad54bd430888149710bcadb28.jpg?w=1080&h=592"
          alt=""
        />
      </div>
      <div class="xqy_img14">
        <img
          src="https://img.youpin.mi-img.com/shopmain/bc034b49800ac262cdc340e6538bf9c3.jpg?w=1080&h=683"
          alt=""
        />
      </div>
      <div class="xqy_img15">
        <img
          src="https://img.youpin.mi-img.com/shopmain/80ba2c10f205d6f792cb666f2b39330c.jpg?w=1080&h=822"
          alt=""
        />
      </div>
      <div class="xqy_img16">
        <img
          src="https://img.youpin.mi-img.com/shopmain/a0d7542f227ab94e780ca02274dc28e0.jpg?w=1080&h=620"
          alt=""
        />
      </div>
      <div class="xqy_img17">
        <img
          src="https://img.youpin.mi-img.com/shopmain/5c06ce7b02367b385027f0fbce80eae0.jpg?w=1080&h=662"
          alt=""
        />
      </div>
      <div class="xqy_img18">
        <img
          src="https://img.youpin.mi-img.com/shopmain/e83ef77e8193eec233b2e85dc76035fa.jpg?w=1080&h=599"
          alt=""
        />
      </div>
      <div class="xqy_img19">
        <img
          src="https://img.youpin.mi-img.com/shopmain/e51236b540a4d43fe8714887d267ea52.jpg?w=1080&h=710"
          alt=""
        />
      </div>
      <div class="xqy_img20">
        <img
          src="https://img.youpin.mi-img.com/shopmain/7ae7d75090f6fda32071720c3c638b14.gif?w=1080&h=1671"
          alt=""
        />
      </div>
      <div class="xqy_img21">
        <img
          src="https://img.youpin.mi-img.com/shopmain/ff7c6bd853e70a7572d235387db2f457.jpg?w=1080&h=740"
          alt=""
        />
      </div>
      <div class="xqy_img22">
        <img
          src="https://img.youpin.mi-img.com/shopmain/0f6a907a116c7807e5509fea2db5fe1d.jpg?w=1080&h=467"
          alt=""
        />
      </div>
      <div class="xqy_img23">
        <img
          src="https://img.youpin.mi-img.com/shopmain/ac84790e4f75e7c4c79afd1b508d9359.jpg?w=1080&h=502"
          alt=""
        />
      </div>
      <div class="xqy_img24">
        <img
          src="https://img.youpin.mi-img.com/shopmain/37fd09157f557255b8bbb8b6c7180590.jpg?w=1080&h=509"
          alt=""
        />
      </div>
      <div class="xqy_img25">
        <img
          src="https://img.youpin.mi-img.com/shopmain/fb0777c485e89b246efd3198ac743e82.jpg?w=1080&h=1038"
          alt=""
        />
      </div>
      <div class="xqy_img26">
        <img
          src="https://img.youpin.mi-img.com/shopmain/b2fee6f702b03470e3635bc64d0b276e.jpg?w=1080&h=1108"
          alt=""
        />
      </div>
      <div class="xqy_img27">
        <img
          src="https://img.youpin.mi-img.com/shopmain/d85106e441c3d23dd8190af9f16aec1a.jpg?w=1080&h=787"
          alt=""
        />
      </div>
      <div class="xqy_img28">
        <img
          src="https://img.youpin.mi-img.com/shopmain/0317d5195b4ce5cd696e62775b4d2049.jpg?w=1080&h=634"
          alt=""
        />
      </div>
      <div class="xqy_img29">
        <img
          src="https://img.youpin.mi-img.com/shopmain/ae92048fa91a14665d61826783c606f3.jpg?w=1080&h=831"
          alt=""
        />
      </div>
      <div class="xqy_img30">
        <img
          src="https://img.youpin.mi-img.com/shopcenter/922b4733_da4e_4175_ab31_869633168ff4.png"
          alt=""
        />
      </div>
      <div class="jxhw">
        <div class="jxhw1">精选相关好物</div>
      </div>
      <div class="header_jxhw">
        <div class="header_jxhw1">
          <div class="header_jxhw2">
            <div class="header_jxhw3">
              <img
                src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg?w=1080&h=1080"
                alt=""
              />
            </div>
            <div class="xxx">防泼水抗菌休闲鞋</div>
            <div class="xxx1">创新商务防泼水抗菌休闲鞋</div>
            <div class="xxx2">
              <span>￥</span>
              <span>329起</span>
            </div>
          </div>
          <div class="header_jxhw2">
            <div class="header_jxhw3">
              <img
                src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg?w=1080&h=1080"
                alt=""
              />
            </div>
            <div class="xxx">防泼水抗菌休闲鞋</div>
            <div class="xxx1">创新商务防泼水抗菌休闲鞋</div>
            <div class="xxx2">
              <span>￥</span>
              <span>329起</span>
            </div>
          </div>
        </div>
        <div class="header_jxhw1">
          <div class="header_jxhw2">
            <div class="header_jxhw3">
              <img
                src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg?w=1080&h=1080"
                alt=""
              />
            </div>
            <div class="xxx">防泼水抗菌休闲鞋</div>
            <div class="xxx1">创新商务防泼水抗菌休闲鞋</div>
            <div class="xxx2">
              <span>￥</span>
              <span>329起</span>
            </div>
          </div>
          <div class="header_jxhw2">
            <div class="header_jxhw3">
              <img
                src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg?w=1080&h=1080"
                alt=""
              />
            </div>
            <div class="xxx">防泼水抗菌休闲鞋</div>
            <div class="xxx1">创新商务防泼水抗菌休闲鞋</div>
            <div class="xxx2">
              <span>￥</span>
              <span>329起</span>
            </div>
          </div>
        </div>
        <div class="header_jxhw1">
          <div class="header_jxhw2">
            <div class="header_jxhw3">
              <img
                src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg?w=1080&h=1080"
                alt=""
              />
            </div>
            <div class="xxx">防泼水抗菌休闲鞋</div>
            <div class="xxx1">创新商务防泼水抗菌休闲鞋</div>
            <div class="xxx2">
              <span>￥</span>
              <span>329起</span>
            </div>
          </div>
          <div class="header_jxhw2">
            <div class="header_jxhw3">
              <img
                src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg?w=1080&h=1080"
                alt=""
              />
            </div>
            <div class="xxx">防泼水抗菌休闲鞋</div>
            <div class="xxx1">创新商务防泼水抗菌休闲鞋</div>
            <div class="xxx2">
              <span>￥</span>
              <span>329起</span>
            </div>
          </div>
        </div>
        <div class="header_jxhw1">
          <div class="header_jxhw2">
            <div class="header_jxhw3">
              <img
                src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg?w=1080&h=1080"
                alt=""
              />
            </div>
            <div class="xxx">防泼水抗菌休闲鞋</div>
            <div class="xxx1">创新商务防泼水抗菌休闲鞋</div>
            <div class="xxx2">
              <span>￥</span>
              <span>329起</span>
            </div>
          </div>
          <div class="header_jxhw2">
            <div class="header_jxhw3">
              <img
                src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg?w=1080&h=1080"
                alt=""
              />
            </div>
            <div class="xxx">防泼水抗菌休闲鞋</div>
            <div class="xxx1">创新商务防泼水抗菌休闲鞋</div>
            <div class="xxx2">
              <span>￥</span>
              <span>329起</span>
            </div>
          </div>
        </div>
        <div class="header_jxhw1">
          <div class="header_jxhw2">
            <div class="header_jxhw3">
              <img
                src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg?w=1080&h=1080"
                alt=""
              />
            </div>
            <div class="xxx">防泼水抗菌休闲鞋</div>
            <div class="xxx1">创新商务防泼水抗菌休闲鞋</div>
            <div class="xxx2">
              <span>￥</span>
              <span>329起</span>
            </div>
          </div>
          <div class="header_jxhw2">
            <div class="header_jxhw3">
              <img
                src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg?w=1080&h=1080"
                alt=""
              />
            </div>
            <div class="xxx">防泼水抗菌休闲鞋</div>
            <div class="xxx1">创新商务防泼水抗菌休闲鞋</div>
            <div class="xxx2">
              <span>￥</span>
              <span>329起</span>
            </div>
          </div>
        </div>
        <div class="header_jxhw1">
          <div class="header_jxhw2">
            <div class="header_jxhw3">
              <img
                src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg?w=1080&h=1080"
                alt=""
              />
            </div>
            <div class="xxx">防泼水抗菌休闲鞋</div>
            <div class="xxx1">创新商务防泼水抗菌休闲鞋</div>
            <div class="xxx2">
              <span>￥</span>
              <span>329起</span>
            </div>
          </div>
          <div class="header_jxhw2">
            <div class="header_jxhw3">
              <img
                src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg?w=1080&h=1080"
                alt=""
              />
            </div>
            <div class="xxx">防泼水抗菌休闲鞋</div>
            <div class="xxx1">创新商务防泼水抗菌休闲鞋</div>
            <div class="xxx2">
              <span>￥</span>
              <span>329起</span>
            </div>
          </div>
        </div>
        <div class="header_jxhw1">
          <div class="header_jxhw2">
            <div class="header_jxhw3">
              <img
                src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg?w=1080&h=1080"
                alt=""
              />
            </div>
            <div class="xxx">防泼水抗菌休闲鞋</div>
            <div class="xxx1">创新商务防泼水抗菌休闲鞋</div>
            <div class="xxx2">
              <span>￥</span>
              <span>329起</span>
            </div>
          </div>
          <div class="header_jxhw2">
            <div class="header_jxhw3">
              <img
                src="https://img.youpin.mi-img.com/shopmain/8d9a6bd7b78dc66a4c4278678b87b972.jpg?w=1080&h=1080"
                alt=""
              />
            </div>
            <div class="xxx">防泼水抗菌休闲鞋</div>
            <div class="xxx1">创新商务防泼水抗菌休闲鞋</div>
            <div class="xxx2">
              <span>￥</span>
              <span>329起</span>
            </div>
          </div>
        </div>
      </div>

      <!-- <div></div> -->
        <!-- <div class=""></div> -->
    </div>
    <!-- header -->
  </div>
</template>
<script>
// @ is an alias to /src
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      count: "", //倒计时
      seconds: 86400, // 10天的秒数
    };
  },
  mounted() {
    this.Time(); //调用定时器
    var swiper = new Swiper("#baner", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });
  },
  methods: {
    // 天 时 分 秒 格式化函数
    countDown() {
      let h = parseInt((this.seconds / (60 * 60)) % 24);
      h = h < 10 ? "0" + h : h;
      let m = parseInt((this.seconds / 60) % 60);
      m = m < 10 ? "0" + m : m;
      let s = parseInt(this.seconds % 60);
      s = s < 10 ? "0" + s : s;
      this.count = h + ":" + m + ":" + s;
    },
    //定时器没过1秒参数减1
    Time() {
      setInterval(() => {
        this.seconds -= 1;
        this.countDown();
      }, 1000);
    },
  },
};
</script>
<style  scoped>
.header {
  width: 3.75rem;
  height: 9.74rem;
  background: white;
}
.header1 {
  width: 3.75rem;
  height: 3.75rem;
}
.header1 img {
  width: 100%;
  height: 100%;
}
.header-top {
  width: 3.75rem;
  height: 3.75rem;
  margin: 0 auto;
  background: pink;
}
.header-top img {
  width: 100%;
  height: 100%;
}

.header-top1 {
  width: 3.75rem;
  height: 3.2rem;
  /* background: red; */
}
.header-djs {
  width: 3.75rem;
  height: 0.56rem;
  background: #ff3040;
  display: flex;
  justify-content: space-between;
}
.header-yp {
  width: 0.98rem;
  height: 0.56rem;
  /* background: white; */
  margin-left: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.ypms {
  width: 0.4rem;
  height: 0.4rem;
  background: white;
  color: red;
  text-align: center;
  border-radius: 0.06rem;
  margin: 0.07rem 0 0 0;
  font-size: 0.14rem;
  font-weight: 700;
  /* background-color: rgb(255, 255, 255); */
}
.price {
  /* width: 0.4rem; */
  height: 0.34rem;
  /* background: chartreuse; */
  margin: 0.1rem 0 0 0;
  display: flex;
  font-weight: 600;
  color: white;
}
.price span:nth-child(1) {
  display: block;
  margin-top: 0.12rem;
  font-size: 0.18rem;
}
.price span:nth-child(2) {
  font-size: 0.26rem;
}
.djs_img {
  width: 1.71rem;
  height: 0.56rem;
  /* background: blue; */
}
.djs_img img {
  width: 100%;
  height: 100%;
}
#header-yp_right {
  width: 1.21rem;
  height: 0.56rem;
  /* background: blue; */
  /* margin-right:0.1rem; */
  float: right;
  display: flex;
}
.djs_qw {
  width: 0.16rem;
  height: 0.16rem;
  /* background: black; */
  margin-top: 0.19rem;
  font-size: 0.1rem;
  color: #feece9;
  text-align: center;
  text-indent: 0.03rem;
  line-height: 0.16rem;
  font-weight: 700;
}
.djs_dt {
  width: 0.95rem;
  height: 0.56rem;
  /* background: yellow; */
  /* margin: 0.2rem 0 0 0.2rem; */
}
.djs_djs {
  width: 0.95rem;
  height: 0.16rem;
  margin-top: 0.04rem;
  font-weight: 700;
  /* background: red; */
}
.djs_djs1 {
  width: 0.95rem;
  height: 0.24rem;
  background: #8c1b14;
  margin-top: 0.05rem;
  border-radius: 0.07rem;
}
.djs_djs1 p {
  font-size: 0.12rem;
  line-height: 0.24rem;
  text-align: center;
  color: #fcfaf9;
}
.djs_djs p {
  font-size: 0.12rem;
  color: white;
}
.header_pice {
  width: 3.75rem;
  height: 0.61rem;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.header-pice_left {
  /* width: 0.56rem; */
  height: 0.61rem;
  /* background: yellow; */
  margin: 0 0 0 0.09rem;
}
.header-pice-bottom {
  /* width: 0.56rem; */
  height: 0.18rem;
  background: white;
  margin: 0.04rem 0 0 0;
}
.header-pice-bottom span {
  font-size: 0.14rem;
  text-decoration-line: line-through;
  color: rgba(0, 0, 0, 0.4);
  text-indent: 0.02rem;
}
.header-pice-top {
  /* width: 0.56rem; */
  height: 0.34rem;
  /* background: red; */
  color: rgb(153, 98, 26);
  font-weight: 500;
}
.header-pice-top span:nth-child(1) {
  font-size: 0.16rem;
}
.header-pice-top span:nth-child(2) {
  font-size: 0.26rem;
}
.header-pice_right {
  width: 0.4rem;
  height: 0.4rem;
  /* background: pink; */
  margin: 0.1rem 0 0 0;
}
.header-pice_right img {
  width: 100%;
  height: 100%;
}
.header-zngy {
  width: 3.51rem;
  height: 0.32rem;
  background: #0e2240;
  margin: 0.03rem auto;
  display: flex;
  justify-content: space-around;
}
.header-vip {
  width: 0.42rem;
  height: 0.21rem;
  /* background: red; */
  margin: 0.06rem 0 0 0;
}
.header-vip img {
  width: 100%;
  height: 100%;
}
.header-vip1 {
  width: 2.19rem;
  height: 0.22rem;
  /* background: blue; */
  margin: 0.06rem 0 0 0;
  color: rgb(255, 179, 123);
}
.header-vip2 {
  width: 0.66rem;
  height: 0.16rem;
  margin: 0.09rem 0 0 0;
  background-image: linear-gradient(
    1.5708rad,
    rgb(255, 222, 184),
    rgb(255, 177, 121)
  );
  font-size: 0.12rem;
  line-height: 0.17rem;
  border-radius: 0.1rem;
  color: rgb(79, 34, 12);
  text-indent: 0.07rem;
}
.header-zngy_yd {
  width: 3.75rem;
  height: 0.96rem;
  background: #ffffff;
  margin: 0.1rem 0 0 0;
}
.header-ypjs {
  width: 3.51rem;
  height: 0.24rem;
  /* background: yellow; */
  margin: 0 auto;
  color: rgb(51, 51, 51);
  font-size: 0.16rem;
  font-weight: 500;
}
.header-ypjs1 {
  width: 3.51rem;
  height: 0.66rem;
  /* background: turquoise; */
  margin: 0.06rem auto;
}
.header-ypjs1 li {
  height: 0.18rem;
  font-size: 0.12rem;
  margin-top: 0.03rem;
  color: rgba(0, 0, 0, 0.8);
}
.header_zngy-dz {
  /* width: 3.51rem; */
  height: 0.1rem;
  background: #ffffff;
  /* margin: 0.14rem auto; */
}
.header_zngy_kbdy {
  height: 0.1rem;
  background-color: rgb(244, 244, 244);
  border-color: rgb(229, 229, 229);
}
.header-yhq {
  width: 3.75rem;
  height: 0.41;
}
.header-yhq img {
  width: 100%;
  height: 100%;
}
.header-xzps {
  width: 3.75rem;
  /* height: 2.04rem; */
  background: #f4f4f4;
  margin: 0 auto;
}
.header-xzps_1 {
  width: 3.75rem;
  height: 0.79rem;
  background: white;
  display: flex;
  justify-content: space-around;
}
.yx {
  width: 0.31rem;
  height: 0.22rem;
  /* background: yellow; */
  color: rgb(136, 136, 136);
  font-size: 0.14rem;
}
.gmwp {
  width: 3.07rem;
  height: 0.64rem;
  /* background: yellowgreen; */
}
.gmwp_1 {
  height: 0.22rem;
  font-size: 0.14rem;
  word-spacing: 1.8rem;
}
.gmwp_1 span:nth-child(1) {
  font-weight: bold;
}
.gmwp_1 span:nth-child(2) {
  color: #bababa;
  margin-right: 0.2rem;
}
.header-xgt {
  width: 2.83rem;
  height: 0.32rem;
  /* background: pink; */
  display: flex;
  justify-content: space-around;
}
.xgt1 {
  width: 0.32rem;
  height: 0.32rem;
  background: #f8f8f8;
}
.xgt1 img {
  width: 100%;
  height: 100%;
}
.xgt2 {
  width: 0.98rem;
  height: 0.34rem;
  background: #f8f8f8;
  color: rgba(0, 0, 0, 0.3);
  font-size: 0.14rem;
  line-height: 0.34rem;
}
.header-psdz {
  width: 3.75rem;
  height: 1rem;
  background: white;
  display: flex;
  justify-content: space-around;
}
.header-psdz1 {
  width: 3.07rem;
  /* height: 1.09rem; */
  /* background: pink; */
  font-size: 0.14rem;
  word-spacing: 0.9rem;
  color: #bababa;
}
.header-psdz1 span:nth-child(1) {
  color: rgb(51, 51, 51);
}
.header-psdz1 span:nth-child(2) {
  width: 0.6rem;
  height: 0.14rem;
  color: #c59c6c;
  font-size: 0.06rem;
  background: #ffe8d9;
}
.header-psdz1 span:nth-child(3) {
  color: red;
  font-size: 0.14rem;
}
.header-psdz1 span:nth-child(4) {
  font-size: 0.14rem;
  margin-left: 0.05rem;
  word-spacing: 0.02rem;
  color: #5f5f5f;
}
.header-psdz1 .header-bh {
  color: #5f5f5f;
  font-size: 0.14rem;
}
.byth {
  width: 3.75rem;
  height: 0.39rem;
  background: #fafafa;
  display: flex;
  justify-content: space-around;
}
.yqwz {
  /* width: 0.66rem; */
  height: 0.16rem;
  /* background: yellow; */
  margin-top: 0.16rem;
  color: rgb(51, 51, 51);
  font-size: 0.11rem;
  display: flex;
  justify-content: space-between;
}
.yqwz_img {
  width: 0.16rem;
  height: 0.16rem;
  /* background: #FAFAFA; */
}
.yqwz_img img {
  width: 100%;
  height: 100%;
}
.yqwz:nth-child(4) span {
  word-spacing: 0.2rem;
}
.yqwz:nth-child(4) span span {
  color: #bdbdbd;
}
.header_zngy_kbdy1 {
  height: 0.1rem;
  background-color: rgb(244, 244, 244);
  border-color: rgb(229, 229, 229);
}
.header-plq {
  width: 3.75rem;
  height: 2.54rem;
  background: #ffffff;
  margin: -0.09rem auto;
  /* display: flex; */
}
.header-yhgx {
  width: 3.49rem;
  height: 0.24rem;
  /* background: yellow; */
  margin: 0.1rem auto;
  display: flex;
  justify-content: space-between;
}
.header-yhgx-left {
  width: 0.86rem;
  /* height: 0.24rem; */
  /* background: pink; */
  font-size: 0.14rem;
  color: #333333;
  font-weight: bold;
}
.header-yhgx-right {
  width: 0.83rem;
  height: 0.24rem;
  /* background: pink; */
  font-size: 0.14rem;
  color: #b5b5b5;
  word-spacing: 0.06rem;
}
.header-pljx {
  width: 3.51rem;
  /* height: 0.68rem; */
  /* background: pink; */
  margin: 0 auto;
  /* display: flex; */
  /* justify-content: space-evenly; */
}
.header-pljx1 {
  width: 2.5rem;
  /* height: 0.36rem; */
  /* background: yellow; */
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-evenly;
  /* margin: 0 auto; */
}
.header-pljx11 {
  width: 0.77rem;
  /* height: 0.36rem; */
  background: #f4f4f4;
  border-radius: 0.1rem;
  font-weight: normal;
  color: rgb(51, 51, 51);
  font-size: 0.13rem;
  text-indent: 0.05rem;
  line-height: 0.36rem;
  text-align: center;
}
.header-pljx2 {
  width: 3.3rem;
  /* height: 0.36rem; */
  /* background: red; */
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.1rem;
}
.header-pljx21 {
  width: 1.03rem;
  height: 0.36rem;
  /* background: blue; */
  background: #f4f4f4;
  border-radius: 0.1rem;
  font-weight: normal;
  color: rgb(51, 51, 51);
  font-size: 0.13rem;
  text-indent: 0.05rem;
  line-height: 0.3rem;
  text-align: center;
}
.sfz-wz {
  width: 3.51rem;
  height: 0.84rem;
  /* background: pink; */
  /* padding: 0.15rem 0 0 ; */
  margin: 0.1rem auto;
}
.sfz-wz1 {
  width: 3.51rem;
  height: 0.35rem;
  /* background: yellow; */
  display: flex;
  /* justify-content: space-between; */
}
.sfz-tx {
  width: 0.32rem;
  height: 0.32rem;
  /* background: red; */
  margin-top: 0.02rem;
}
.sfz-tx img {
  width: 100%;
  height: 100%;
}
.sfz-gm {
  width: 2.5rem;
  height: 0.35rem;
  /* background: chartreuse; */
  margin-left: 0.2rem;
}
.sfz-gm p {
  color: rgb(136, 136, 136);
  font-size: 0.12rem;
}
.header-ml {
  width: 3.51rem;
  height: 0.21rem;
  /* background: chartreuse; */
  margin-top: 0.12rem;
}
.header-ml p {
  font-size: 0.14rem;
}
.header-ckpl {
  width: 1.28rem;
  /* height: 0.3rem; */
  /* background: cyan; */
  border-radius: 0.06rem;
  margin: 0.02rem auto;
  color: rgb(30, 31, 31);
  font-size: 0.13rem;
  line-height: 0.3rem;
  text-align: center;
}
.zwwd {
  width: 3.75rem;
  /* height: 0.88rem; */
  /* background: yellow; */
  display: flex;
  justify-content: space-between;
}
.zwwd-left {
  width: 2.08rem;
  height: 0.5rem;
  /* background: pink; */
  text-indent: 0.1rem;
  /* display: flex; */
}
.zwwd-left p {
  font-weight: bold;
  color: rgb(51, 51, 51);
  font-size: 0.15rem;
}
.zwwd-bottom {
  width: 2.08rem;
  /* height: 0.17rem; */
  /* background: red; */
  margin-top: 0.02rem;
  display: flex;
  font-size: 0.13rem;
}
.wh {
  display: flex;
  width: 0.18rem;
  height: 0.18rem;
  /* background: red; */
  margin-left: 0.1rem;
  color: rgb(51, 51, 51);
  font-size: 0.13rem;
}
.wh img {
  width: 100%;
  height: 100%;
}
.zwwd-right {
  width: 0.69rem;
  height: 0.25rem;
  border-radius: 0.06rem;
  /* background: #C18B46; */
  border: 0.02rem solid #c18b46;
  border-radius: 0.13rem;
  /* border-radius: 0.02rem solid #C18B46; */
  margin-top: 0.1rem;
  margin-right: 0.1rem;
  color: rgb(180, 115, 31);
  font-size: 0.13rem;
  text-align: center;
  line-height: 0.25rem;
}
.header-jrdp {
  width: 3.75rem;
  height: 1.08rem;
}
.header-jrdp img {
  width: 100%;
  height: 100%;
}
.header-xghw {
  width: 3.75rem;
  /* height: 4.57rem; */
  /* background: red; */
  /* display: flex; */
}
.header-xghw1 {
  width: 3.75rem;
  /* height: 0.57rem; */
  /* background: yellow; */
  display: flex;
  justify-content: space-evenly;
}
.header-xghw2 {
  /* width: 0.56rem; */
  /* height: 0.28rem; */
  /* background: red; */
  color: #bc7c00;
  text-decoration: underline;
}
.header-zs {
  width: 3.75rem;
  height: 3.9rem;
  /* background: pink; */
}
.header-zs1 {
  width: 3.75rem;
  height: 1.83rem;
  background: #ffffff;
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.1rem;
}
.zs11 {
  width: 1.13rem;
  height: 1.83rem;
  /* background: red; */
}
.zs-img {
  width: 1.13rem;
  height: 1.13rem;
  /* background: yellow; */
}
.zs-img img {
  width: 100%;
  height: 100%;
}
.pp {
  color: rgb(0, 0, 0);
  font-size: 0.13rem;
  text-align: center;
}
.zs11 p {
  font-size: 0.16rem;
  margin-top: 0.2rem;
  text-indent: 0.2rem;
  color: rgb(153, 98, 26);
}
.cl {
  width: 3.75rem;
  height: 0.1rem;
  background-color: rgb(244, 244, 244);
  border-color: rgb(229, 229, 229);
}
.spxqy {
  width: 3.75rem;
  /* height: 0.5rem; */
  /* background: yellow; */
}
.spxqy1 {
  width: 0.93rem;
  /* height: 0.5rem; */
  /* background: red; */
  margin: 0 auto;
  text-decoration: underline;
  color: rgb(188, 124, 0);
  font-size: 0.14rem;
  font-weight: bold;
  text-align: center;
}
.xqy_img {
  width: 3.75rem;
  height: 2.63rem;
  /* margin: 0.1rem auto; */
}
.xqy_img img {
  width: 100%;
  height: 100%;
}
.xqy_img1 {
  width: 3.75rem;
  height: 2.67rem;
}
.xqy_img1 img {
  width: 100%;
  height: 100%;
}
.xqy_img2 {
  width: 3.75rem;
  height: 2.79rem;
}
.xqy_img2 img {
  width: 100%;
  height: 100%;
}
.xqy_img3 {
  width: 3.75rem;
  height: 2.89rem;
}
.xqy_img3 img {
  width: 100%;
  height: 100%;
}
.xqy_img4 {
  width: 3.75rem;
  height: 2.55rem;
}
.xqy_img4 img {
  width: 100%;
  height: 100%;
}
.xqy_img5 {
  width: 3.75rem;
  height: 2.72rem;
}
.xqy_img5 img {
  width: 100%;
  height: 100%;
}
.xqy_img6 {
  width: 3.75rem;
  height: 2.68rem;
}
.xqy_img6 img {
  width: 100%;
  height: 100%;
}
.xqy_img7 {
  width: 3.75rem;
  height: 2.16rem;
}
.xqy_img7 img {
  width: 100%;
  height: 100%;
}
.xqy_img8 {
  width: 3.75rem;
  height: 4.47rem;
}
.xqy_img8 img {
  width: 100%;
  height: 100%;
}
.xqy_img9 {
  width: 3.75rem;
  height: 2.78rem;
}
.xqy_img9 img {
  width: 100%;
  height: 100%;
}
.xqy_img10 {
  width: 3.75rem;
  height: 2.65rem;
}
.xqy_img10 img {
  width: 100%;
  height: 100%;
}
.xqy_img11 {
  width: 3.75rem;
  height: 2.54rem;
}
.xqy_img11 img {
  width: 100%;
  height: 100%;
}
.xqy_img12 {
  width: 3.75rem;
  height: 2.9rem;
}
.xqy_img12 img {
  width: 100%;
  height: 100%;
}
.xqy_img13 {
  width: 3.75rem;
  height: 2.05rem;
}
.xqy_img13 img {
  width: 100%;
  height: 100%;
}
.xqy_img14 {
  width: 3.75rem;
  height: 2.37rem;
}
.xqy_img14 img {
  width: 100%;
  height: 100%;
}
.xqy_img15 {
  width: 3.75rem;
  height: 2.85rem;
}
.xqy_img15 img {
  width: 100%;
  height: 100%;
}
.xqy_img16 {
  width: 3.75rem;
  height: 2.15rem;
}
.xqy_img16 img {
  width: 100%;
  height: 100%;
}
.xqy_img17 {
  width: 3.75rem;
  height: 2.29rem;
}
.xqy_img17 img {
  width: 100%;
  height: 100%;
}
.xqy_img18 {
  width: 3.75rem;
  height: 2.07rem;
}
.xqy_img18 img {
  width: 100%;
  height: 100%;
}
.xqy_img19 {
  width: 3.75rem;
  height: 2.47rem;
}
.xqy_img19 img {
  width: 100%;
  height: 100%;
}
.xqy_img20 {
  width: 3.75rem;
  height: 5.8rem;
}
.xqy_img20 img {
  width: 100%;
  height: 100%;
}
.xqy_img21 {
  width: 3.75rem;
  height: 2.56rem;
}
.xqy_img21 img {
  width: 100%;
  height: 100%;
}
.xqy_img22 {
  width: 3.75rem;
  height: 1.62rem;
}
.xqy_img22 img {
  width: 100%;
  height: 100%;
}
.xqy_img23 {
  width: 3.75rem;
  height: 1.74rem;
}
.xqy_img23 img {
  width: 100%;
  height: 100%;
}
.xqy_img24 {
  width: 3.75rem;
  height: 1.76rem;
}
.xqy_img24 img {
  width: 100%;
  height: 100%;
}
.xqy_img25 {
  width: 3.75rem;
  height: 3.6rem;
}
.xqy_img25 img {
  width: 100%;
  height: 100%;
}
.xqy_img26 {
  width: 3.75rem;
  height: 3.84rem;
}
.xqy_img26 img {
  width: 100%;
  height: 100%;
}
.xqy_img27 {
  width: 3.75rem;
  height: 2.73rem;
}
.xqy_img27 img {
  width: 100%;
  height: 100%;
}
.xqy_img28 {
  width: 3.75rem;
  height: 2.2rem;
}
.xqy_img28 img {
  width: 100%;
  height: 100%;
}
.xqy_img29 {
  width: 3.75rem;
  height: 2.88rem;
}
.xqy_img29 img {
  width: 100%;
  height: 100%;
}
.xqy_im30 {
  width: 3.75rem;
  height: 3.03rem;
}
.xqy_img30 img {
  width: 100%;
  height: 100%;
}
.jxhw {
  width: 3.75rem;
  /* height: 0.46rem; */
  background: #ffffff;
}
.jxhw1 {
  /* width: 1.9rem; */
  /* height: 0.46rem; */
  /* background: yellow; */
  margin: 0 auto;
  text-align: center;
  line-height: 0.46rem;
  color: rgb(51, 51, 51);
  font-size: 0.15rem;
}
.header_jxhw {
  width: 3.75rem;
  /* height: 34.44rem; */
  background: #f4f4f4;
}
.header_jxhw1 {
  width: 3.75rem;
  height: 2.77rem;
  /* background: pink; */
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.1rem;
}
.header_jxhw2 {
  width: 1.71rem;
  height: 2.77rem;
  background: white;
}
.header_jxhw3 {
  width: 1.71rem;
  height: 1.71rem;
  /* background: yellow; */
}
.header_jxhw3 img {
  width: 100%;
  height: 100%;
}
.xxx {
  /* width: 1.12rem; */
  /* height: 0.22rem; */
  /* background: pink; */
  font-size: 0.14rem;
  color: rgba(0, 0, 0, 0.8);
  margin-left: 0.02rem;
}
.xxx1 {
  /* width: 1.12rem; */
  /* height: 0.22rem; */
  /* background: yellow; */
  font-size: 0.11rem;
  color: rgba(0, 0, 0, 0.6);
  margin-left: 0.02rem;
  margin-top: 0.1rem;
}
.xxx2 {
  width: 1.59rem;
  height: 0.24rem;
  /* background: blue; */
  margin-top: 0.2rem;
  color: rgb(248, 36, 0);
}
.xxx2 span:nth-child(1) {
  font-size: 0.12rem;
}
</style>