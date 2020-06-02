### 创建排序表

```sql
create table blbl_rankings(
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(100) COMMENT '标题',
    `author` VARCHAR(100) COMMENT '作者',
    `rank` VARCHAR(100) COMMENT '排名',
    `date_today` VARCHAR(100) COMMENT '排名日期',
    `href_url` VARCHAR(100) COMMENT '跳转链接',
    `img_url` VARCHAR(100) COMMENT '图片链接',
    `play` INT UNSIGNED COMMENT '播放量',
    `view` INT UNSIGNED COMMENT '访问量',
    `score` INT UNSIGNED COMMENT '综合得分',
    `category_type` INT UNSIGNED COMMENT '分类',
    `period_type` INT UNSIGNED COMMENT '排序周期'
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
