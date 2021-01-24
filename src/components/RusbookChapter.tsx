import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './RusbookChapter.css';

interface RusbookChapterProps {
    title: string;
    content: string;
};

interface RusbookChapterState {
    created_at: Date;
    updated_at: Date;
    editor: String; // name on the content editor
};

class RusbookChapter extends Component<RusbookChapterProps, RusbookChapterState> {
    constructor (props: RusbookChapterProps) {
        super(props);
        // initial state
        this.state = {
            created_at: new Date(),
            updated_at: new Date(),
            editor: "undefined",
        };
    }

    render() {
        return (
            <div className="Container">
                <p>This is where markdown content will be displayed!</p>
                <strong>{this.state.created_at.toLocaleTimeString()}</strong>
                <p>Title: {this.props.title}</p>
                <p>Content: {this.props.content}</p>
            </div>
        );
    }
}

export default RusbookChapter;