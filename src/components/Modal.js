import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSave, description, setDescription, priority, setPriority }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3 className='popup-title'>Edit Your Item</h3>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button className="save-btn" onClick={onSave}>Save</button>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;