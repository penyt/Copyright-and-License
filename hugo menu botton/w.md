# 左上角加上選單按鈕
原本是看到這個返回按鈕 https://blog.linsnow.cn/p/modify-hugo/

但是實際在操作的時候覺得直接回首頁有時不方便，就想把它變成選單

可以讓頁面簡化的同時(進入文章時sidebar的head去掉)，同時還是有叫出選單的地方

# 設置
* 樣式：一些樣式的設置一樣使用 https://blog.linsnow.cn/p/modify-hugo/ 的設定

* menu.scss：拿 #left-menu 和 #main-menu 來改

* ts：新增一個 leftMenu，設置基本上和 toggleMenu 一樣，畢竟點擊事件的本質沒有變

* single.html：加入按鈕及選單內容，抓 /layouts/partials/sidebar/left.html 裡面的 main-menu 部分，沒什麼額外的特別配置

稍微麻煩了一點，但其實都是拿現成的東西改一改加上去而已
  
效果：https://myw.penli.quest/p/big-sky-ground/
