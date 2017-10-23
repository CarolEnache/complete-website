import React, { Component } from 'react';
import { Button } from 'reactstrap';

const TextArea = props => {

    const { st, tav, cevaDiferit } = props;
    return (
        <div >
            <h3>Title</h3>
            <textarea className="textArea" onChange={e => st(e, cevaDiferit)} value={tav} />
            <Button color="danger">Danger!</Button>
        </div>
    )
};

export default TextArea;