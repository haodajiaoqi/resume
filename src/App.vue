<!-- markdown -->
<template>
  <div class="app">
    <div class="hljs markdown-body" ref="hlDiv" v-html="code"></div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'app',
  data() {
    return {
      code: "## Qiao Fang\n\n**Gender：** Female                                       \n\n**Birthday：** 1991.3.17\n\n**Address:** Xian City , China\n\n**E-mail：** qiaofang_28@163.com\n\n**Tel：** 15129050952\n\n-----------------------\n\n### Education Background\n\n**2018/06-2015/09**\n\n* Master, Animal Embryo Engineering, Clinical Veterinary Medicine, College of Veterinary Medicine, Northwest Agriculture & Forest University, China\n\n* GPA：3.3\n\n**2014/06-2012/09**\n\n* Minor degree, English,  College of Foreign Language, Ningxia  University, China   \n\n\n**2014/06- 2010/09**\n\n* Bachelor, Veterinary Medicine , College of Agriculture, Ningxia  University, China\n\n* GPA：3.2 \n\n------------------------\n\n### Research experience\n\n**2015-2018**       **College of Veterinary Medicine, Northwest Agriculture and Forest University**\n\n* Project1:  Research of Identification and Functional of Sperm-specific MiRNAs Related to Bovine Embryo Development(Grant from National Natural Science foundation ).\n\n* Project 2   Research of Effects of Bovine Uterus-derived Exosomes on the Development of Nuclear Transfer Embryos.\n \n**Molecular Experimental skills**\n\n* western blot, miRNA high-throughput sequencing data analysis, bioinformatics methods to predict target genes of miRNA, Vector construction, cell culture, dual luciferase report\n\n**Embryo manipulation skills**\n\n* Somatic cell nuclear transfer, embryo microinjection, embryo  immunofluorescent staining\n\n------------------------\n### Work Experience\n\n**2018-2020** \n\n* Embryologist, Department of Human Reproductive Medicine,The Affiliated Hospital of Jing Gang Shan University\n\n**Experimental skill** \n\n*  In vitro fertilization, embryo vitrification, intracytoplasmic sperm injection, embryo culture\n\n------------------------\n\n### Publishment\n1. **Qiao F**, Ge H, Ma X, et al. Bovine uterus-derived exosomes improve developmental competence of somatic cell nuclear transfer embryos[J]. Theriogenology, 2018, 114: 199-205. \n\n2. Ma X, Zhang Y, **Qiao F**, et al. Comparison of RNA extraction and microRNA detection protocols for a small amount of germinal vesicle oocytes in bovine[J]. Animal Reproduction Science, 2018. \n\n3. Zhang Y, Qu P, Ma X, **Qiao F**, et al. Tauroursodeoxycholic acid (TUDCA) alleviates endoplasmic reticulum stress of nuclear donor cells under serum starvation[J]. PloS one, 2018, 13(5): e0196785.\n\n4. Wang M, Gao Y, Qu P, Qing S, **Qiao F**, Zhang Y, et al. Sperm-borne miR-449b influences cleavage, epigenetic reprogramming and apoptosis of SCNT embryos in bovine. Scientific Reports. 2017;7:13403.\n\n------------------------\n\n### Awards & Honors \n\n1. 2013-2014  Won the third level scholarship of Ningxia University .\n\n2. 2015-2018  Won the second level  scholarship of Northwest Agriculture & Forest University.\n\n3. 2017-2018  Awarded the \"JianChen scholarship\", Northwest Agriculture & Forest University .\n"
    }
  },
  mounted() {
    this.handle()
  },
  methods: {
    handle() {
      marked.setOptions({
          renderer: new marked.Renderer(),
          pedantic: false,
          gfm: true,
          tables: true,
          breaks: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          xhtml: false
      })
      this.code = marked(this.code)
    }
  }
}

</script>
<style lang='scss'>
.app {
  width: 100%;
  max-width: 960px;
  min-width: 320px;
  margin: 0 auto;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  font-size: 16px;
  line-height: 1.5;
  color: #555555 !important;
  @media (max-width: 768px){
    font-size: 12px !important;
  }
  /*可任意修改样式，或恢复预设值，保存后生效
相对“默认样式”而作的修改会用  红色 标注*/

  .output_wrapper/*此属性为全局*/{
      font-size: 16px;
      color: #3e3e3e;
      line-height: 1.6;
      word-spacing:0px;
      letter-spacing:1px;
      font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
  }
  .output_wrapper * {
    font-size: inherit  ;
    color: inherit;
    line-height: inherit;
    margin:0px;
    padding:0px;
  }

  p {/*段落*/
    margin: 1.5em 0px;
    padding-left:1em;
    padding-right:1em;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 1.5em 0px;
    font-weight:bold;
    color:#159957;        /*改变了其默认的标题颜色*/
    text-align: left;   /*改变了其默认值，使其标题居中*/
  }
  h1 {
    font-size: 1.6em  ;

  }
  h2 {
    font-size: 1.4em;
  }
  h3 {
    font-size: 1.3em;
  }
  h4 {
    font-size: 1.2em;
  }
  h5 {
    font-size: 1em;
  }
  h6 {
    font-size: 1em;
  }

  ul, ol {
    padding-left: 32px;
  }
  ul{ /*无序列表*/
      list-style-type: disc;
  }
  ol { /*有序列表*/
    list-style-type: decimal;
  }
  li * {
  /* color: #3e3e3e;*/
  }

  li{  /*在公众号下，改变不了li符号的属性（如颜色），并会影响其子元素的属性;而在其它博客平台中，则能正常使用*/
      margin-bottom: 0.5em;
  /*  color:#159957; */
  }
  .code_size_default  /*代码块默认size*/ {
    line-height: 18px;
    font-size: 14px;
    font-weight:normal;
    word-spacing:0px;
    letter-spacing:0px;
  }
  .code_size_tight /*代码块紧凑size*/ {
    line-height: 15px;
    font-size: 14px;
    font-weight:normal;
    word-spacing:-3px;
    letter-spacing:0px;
  }
  pre code {
    font-family: Consolas, Inconsolata, Courier, monospace;
    border-radius: 0px;
    width: 100%;
    display: block;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    word-break: break-all;
  }
  blockquote { /*引用块*/
    display: block;
    padding: 15px 1rem;
    font-size: 0.9em;
    padding-right: 15px;
    margin: 1em 0;
    color: #819198;
    border-left: 6px solid #dce6f0;
    background: #f2f7fb;
    overflow: auto;
    overflow-scrolling: touch;
    word-wrap: normal;
    word-break: normal;
  }
  blockquote p {
      margin: 0px;
  }

  a { /*超链接*/
    text-decoration: none;
    color: #1e6bb8;
    word-wrap:break-word;
  }

  strong  /*强调*/
  {
    font-weight: bold;
  }
  em /*斜体*/
  {
  font-style:italic;
  }
  del /*删除线*/
  {
  font-style:italic;
  }
  strong em/*强调的斜体*/
  {
  font-weight: bold;
  }

  hr {  /*分隔线*/
    height: 1px;
    margin: 1.5rem 0px;
    border: none;
    border-top: 1px dashed #A5A5A5;
  }

  code /*行内代码*/
  {
      word-break:break-all;
      word-wrap: break-word;
      padding: 2px 4px;
      border-radius: 4px;
      margin:0 2px;
      background:#f8f8f8;
      font-size: 14px;
      font-weight:normal;
  }
  img
  {
    display: block;
    margin:0 auto;  /*图片水平居中*/
    /* margin:0 0;  */ /*图片水平居左，如需要请打开*/
    max-width:100%;
  }
  figcaption/*图片描述文字*/
  {
    margin-top:10px;
    text-align:center;
    /* text-align:left;  */ /*当图片水平居左时，请打开*/
    color:#999;
    font-size: 0.7em;
  }

  /*================表格开始================*/
  table
  {
  display:table;
  width: 100% ;
  text-align: left;
  }
  tbody {
    border: 0;
  }

  table tr {
    border: 0;
    border-top: 1px solid #CCC;
    background-color: white;

  }

  /*隔行改变行的背景色，如需要请打开*/
  /*
  table tr:nth-child(2n) {
    background-color: #F8F8F8;
  }
  */

  table tr th, table tr td {
    font-size: 1em;
    border: 1px solid #CCC;
    padding: 0.5em 1em;
    text-align: left;
  }
  /*表头的属性*/
  table tr th {
  font-weight: bold;
    background-color: #F0F0F0;
  }
  /*================表格结束================*/

  /*================数学公式开始================*/
  .katex-display {/*块公式*/
    font-size:1.22em;
  }
  .katex
  {/*行内公式*/
    padding:8px 3px;
  }
  .katex-display > .katex
  {/*块公式*/
    display:inline-block;
    text-align:center;
    padding:3px;
  }
  .katex img
  {/*行内公式对应的图片*/
    display:inline-block;
    vertical-align:middle;
  }
  /*================数学公式结束================*/

  a[href^="#"] sup
  {/*注脚*/
    vertical-align:super;
    margin:0 2px;
    padding:1px 3px;
    color: #ffffff;
    background:#666666;
    font-size:0.7em;
  }

  /*================任务列表开始================*/
  .task-list-list {
    list-style-type: none;
  }
  .task-list-list.checked {/*已完成*/
    color: #3e3e3e;
  }

  .task-list-list.uncheck {/*未完成*/
    color: #bfc1bf;
  }
  .task-list-list .icon_uncheck, .task-list-list .icon_check {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }
  .task-list-list .icon_check:before
  {/*已完成*/
      content: "√";
      border: 2px solid #3e3e3e;
      color:red;
  }
  .task-list-list .icon_uncheck:before
  {/*未完成*/
    content: "x";
    border: 2px solid #bfc1bf;
      color: #bfc1bf;
  }
  .task-list-list .icon_check:before, .task-list-list .icon_uncheck:before
  {/*标志框*/
    padding:2px;
    padding-left: 5px;
    padding-right: 8px;
    border-radius:5px;
  }
  /*================任务列表结束================*/

  .toc
  {/*总目录*/
    margin-left:25px;
  }
  .toc_item
  {/*每条目录*/
    display:block;

  }
  .toc_left {/*每级目录的缩进*/
    margin-left:25px;
  }

}
</style>
