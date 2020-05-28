/*
 * @Date: 2020-05-28 10:21:23
 * @Author: xiazhengchun
 * @LastEditors: xiazhengchun
 * @LastEditTime: 2020-05-28 15:16:09
 * @Description: 
 */
// export default App;
import React from 'react'
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
import { Input, Snackbar, Button } from '@material-ui/core';
// 引入编辑器组件
import BraftEditor from 'braft-editor'
import html2canvas from 'html2canvas'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import 'braft-editor/dist/output.css'
import './App.css'
export default class EditorDemo extends React.Component {

  state = {
    // 创建一个空的editorState作为初始值
    editorState: BraftEditor.createEditorState(null),
    outputContent: '',
    canvasConfig: {
      dpi: window.devicePixelRatio * 3,
      scale: 1,
    },
    name: '',
    imageControls: [
      'float-left', // 设置图片左浮动
      'float-right', // 设置图片右浮动
      'align-left', // 设置图片居左
      'align-center', // 设置图片居中
      'align-right', // 设置图片居右
      'link', // 设置图片超链接
      'size', // 设置图片尺寸
      'remove' // 删除图片
    ],
    open: false,
    vertical: 'top',
    horizontal: 'right',
    hideDuration: 2000,
    message: ''
  }

  async componentDidMount() {
    // 假设此处从服务端获取html格式的编辑器内容
    // const htmlContent = await fetchEditorContent()
    // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
    this.setState({
      editorState: BraftEditor.createEditorState('')
    })
  }

  submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = this.state.editorState.toHTML()
    // const result = await saveEditorContent(htmlContent)
    this.setState({
      outputContent: htmlContent
    })
  }
  /**
   * @description: 编辑器改变
   * @param {type} 
   * @return: 
   */
  handleEditorChange = (editorState) => {
    const rawJSON = editorState.toHTML()
    this.setState({ editorState, outputContent: rawJSON })
  }
  /**
   * @description: html转canvas
   * @param {type} 
   * @return: 
   */
  html2canvasHandle = (element) => {
    let { name } = this.state;
    html2canvas(element, this.state.canvasConfig).then(canvas => {
      this.downLoadImg(canvas, name)
    })
  }
  getName(e) {
    this.setState({
      name: e.target.value
    })
  }
  downLoadImg = (canvas, name, type = 'jpg') => {
    if (!canvas) {
      this.setState({
        open: true,
        message: '请先生成文件'
      })
      return;
    }
    if (!name) {
      this.setState({
        open: true,
        message: "请输入文件名name"
      })
      return;
    }
    const link = document.createElement('a');
    const context = canvas.getContext('2d');
    // 【重要】关闭抗锯齿
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    const imgData = canvas.toDataURL({
      quality: 1,
      width: 750,
    });
    const blob = this.dataURLtoBlob(imgData);
    const objurl = URL.createObjectURL(blob);
    link.download = `${name}.${type}`;
    link.href = objurl;
    link.click();
  }
  dataURLtoBlob = (dataurl) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }
  render() {

    const { editorState, outputContent, name, imageControls, open, message, vertical, horizontal, hideDuration } = this.state
    return (
      <div className="my-component">
        <section className="EditorLeft">
          <header>输入</header>
          <BraftEditor
            value={editorState}
            onChange={this.handleEditorChange}
            onSave={this.submitContent}
            imageControls={imageControls}
            media={{
              accepts: {
                image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
                video: 'video/mp4',
                audio: 'audio/mp3'
              }
            }}
          />
        </section>
        <section className="resultRight">
          <header>
            <span>输出</span>
            <Input placeholder="生成的文件名" value={name} onChange={this.getName.bind(this)} className="input-box" />
            <Button onClick={this.html2canvasHandle.bind(this, this.refs.myInput)} variant="contained" color="primary">导出文件</Button></header>
          <div id="braft-output-content" ref='myInput' className="braft-output-content" dangerouslySetInnerHTML={{ __html: outputContent }}>
          </div>
        </section>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          message={message}
          autoHideDuration={hideDuration}
          resumeHideDuration={hideDuration}
        />
      </div>
    )

  }

}