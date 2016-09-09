# border1px
解决手机端高像素比屏下面无法显示1px边框问题

## @mixin border1px($bc:#000, $side: all, $br: 0, $bs: solid)

## params

### $bc 边颜
可选值:hex rgba?
默认值:#000000

    // 绿色边框
    .box{
        @include border1px(green);
    }

### $side 上＼下＼左＼右哪个边框
可选值:all left right bottom top
默认值: all

    // all: 全部显示 all可省
    .box{
        @include border1px(green, all);
    }

    // left：显示左边框
    .box{
        @include border1px(green, left);
    }

    // right：显示右边框
    .box{
        @include border1px(green, right);
    }

    // top：显示上边框
    .box{
        @include border1px(green, top);
    }

    // bottom：显示下边框
    .box{
        @include border1px(green, bottom);
    }

    // 显示多边框
    .box{
        @include border1px(green, top bottom);
    }

### $br: border-radius 圆角 
可选值: Number数字
默认值 0

    .box{
        @include border1px(green, all, 5);
    }
