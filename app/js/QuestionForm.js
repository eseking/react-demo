var React = require('react');

module.exports = React.createClass({
	
	render:function(){
		var styleObj={
			display: this.props.formDisplayed ? 'block': 'none',
			};

		return (
			<form ref="addQuestionForm" style={ styleObj } name="addQuestion" className="clearfix" >
			  <div className="form-group">
			    <label htmlFor="qtitle">问题</label>
			    <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
			  </div>
			  <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
			  <button className="btn btn-success pull-right">确认</button>
			  <a className="btn btn-default pull-right" >取消</a>
			</form>
		)
	}
})