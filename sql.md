### 创建排序表

```sql
create table blbl_rankings(
    `id` INT UNSIGNED AUTO_INCREMENT,
    `title` VARCHAR,
    `author` VARCHAR,
    `rank` VARCHAR,
    `href_url` VARCHAR,
    `img_url` VARCHAR,
    `play` INT UNSIGNED,
    `view` INT UNSIGNED,
    `score` INT UNSIGNED,
    `category_type` INT UNSIGNED,
    `period_type` INT UNSIGNED,
    PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

