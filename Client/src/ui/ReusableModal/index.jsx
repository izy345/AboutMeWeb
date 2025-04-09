import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function ReusableModal({show = true, handleClose, children, style = {}, size = "xl", }) {

    return (
        <Modal show={show} onHide={handleClose} style={style} size={size}>
            <Modal.Header
                closeButton={false}
                style={{
                    backgroundColor: '#cce1e4',
                    padding:"3px",
                    border:'0',
                }}>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <Modal.Title>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '5px 10px' }}>
                            <div style={{ width: 14, height: 14, backgroundColor: '#ff5f56', borderRadius: '50%', marginRight: 4, cursor: 'pointer' }}
                                onClick={() => handleClose()}
                            /> 
                            <div style={{ width: 14, height: 14, backgroundColor: '#ffbd2e', borderRadius: '50%', marginRight: 4, cursor: 'pointer' }}
                                onClick={() => handleClose()}
                            />
                            <div style={{ width: 14, height: 14, backgroundColor: '#27c93f', borderRadius: '50%'}}/>
                        </div>
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body 
                style={{
                    maxHeight: '700px',
                    height: '95vh',

                    overflowY: 'auto',
                    paddingLeft: '8px',
                    paddingRight: '8px',
                    backgroundColor: '#f5fcffff',
                    borderRadius: '0 0 8px 8px',
                }}
                >
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default ReusableModal