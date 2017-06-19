import React from 'react';

const Comments = React.createClass({
  renderComment(comment,i){
    return(
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.texts}
          <button className="remove-comment" onClick={this.props.removeComment.bind
          (null, this.props.params.postId, i)}>&times;</button>
        </p>
      </div>
    )
  },
  handleSubmit(e){
    e.preventDefault();
    const {postId}=this.props.params.value;
    const author = this.props.author.value;
    const comment = this.props.comment.value;
    this.props.addComment(postId,author,comment);
    this.refs.commentForm.reset();

  },
  render() {
    return (
      <div className="comment">
        { this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});

export default Comments;
