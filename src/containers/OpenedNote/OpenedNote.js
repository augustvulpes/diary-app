import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import classes from './OpenedNote.module.css';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';


class OpenedNote extends Component {
    state = {
        changed: false,
        deleting: false
    };

    updateContent = event => {
        this.props.changeContent(event.target.name, event.target.value);
    };

    deleteConfirm = () => {
        this.setState({deleting: true});
    };

    cancelDeleting = () => {
        this.setState({deleting: false});
    };
    
    render() {
        let content = <Spinner />;

        if (!this.props.loading) {
            if (this.props.id) {
                content = (
                    <div className={classes.OpenedNote}>
                        <div className={classes.Date}>{this.props.date}</div>
                        <form>
                            <input
                                type="text" 
                                name="title" 
                                placeholder="Title..." 
                                value={this.props.title} 
                                onChange={this.updateContent} />
                            <div className={classes.TextareaWrapper}>
                                <textarea  
                                    name='postContent'
                                    placeholder="This note looks empty..."
                                    value={this.props.postContent}
                                    onChange={this.updateContent} />
                            </div>
                        </form>
                        <div className={classes.Buttons}>
                            <Button orange clicked={this.deleteConfirm}>Delete</Button>
                            <Button clicked={() => this.props.saveChanges(
                                this.props.title,
                                this.props.postContent,
                                this.props.userId,
                                this.props.token,
                                this.props.id
                            )}>Save Changes</Button>
                        </div>
                    </div>
                );
            } else {
                content = <h1 className={classes.Warning}>None of your notes have been opened yet.<br/>
                    You can choose some of them on <NavLink to="/diary">Diary</NavLink> page!</h1>;
            }
        };

        return (
            <>
                <Modal show={this.state.deleting} modalClosed={this.cancelDeleting}>
                    <h1>Are you really want delete this note?</h1>
                    <div className={classes.SmallButtons}>
                        <button onClick={this.cancelDeleting}>No, keep it safe!</button>
                        <button 
                            className={classes.OrangeSmallButton}
                            onClick={() => {
                                this.props.deleteNote(this.props.id, this.props.token);
                                this.cancelDeleting();
                                }}>Yes, delete this</button>
                    </div>
                </Modal>
                <div className={classes.NoteWrapper}>
                    {content}
                </div>
            </>
        );
    };
};

const mapStateToProps = state => {
    return {
        title: state.note.title,
        postContent: state.note.postContent,
        date: state.note.date,
        id: state.note.id,
        token: state.auth.token,
        loading: state.note.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeContent: (name, value) => dispatch(actions.changeNoteContent(name, value)),
        deleteNote: (id, token) => dispatch(actions.deleteNote(id, token)),
        saveChanges: (title, postContent, userId, token, id) => dispatch(actions.saveChanges(title, postContent, userId, token, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenedNote);