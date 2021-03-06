$(function(){
  var myChart = echarts.init(document.getElementById('main'));
  var excel = document.getElementById('excel');

  var exceldata=[
    ["Java", 1, "降", "-0.01%"],
    ["C", 2, "升", "+2.44%"],
    ["Python", 3, "升", "+1.41%"],
    ["C++", 4, "降", "-2.58%"],
    ["C#", 5, "升", "+2.07%"],
    ["Visual Basic .NET", 6, "降", "-1.17%"],
    ["JavaScript", 7, "降", "-0.85%"] 
  ];
  new Handsontable(excel,{
      data: exceldata,
      className:'htCenter htMiddle',
      colWidths:'175px',
      rowHeights:40,
      colHeaders:[
        '语言名称',
        '排名',
        '升或降',
        '变化幅度'
      ],
      manualColumnResize: true,
      manualRowResize: true,
      //隐藏下面的信息
      licenseKey: 'non-commercial-and-evaluation'
  })

})

