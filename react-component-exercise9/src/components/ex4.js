import React from "react";
function FPTCard() {
    return (
        <div>
            <div className="" style={{ maxWidth: '80rem', margin: 'auto' }}>
                <div className="row card-body">
                    <div className="col-2" style={{ border: 'solid 2px orange', margin: '1px 1px' }}>
                        <img src="logo192.png" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <div className="col-8" style={{ width: '30rem', margin: '1px 1px' }}>
                        <div className="row" style={{ border: 'solid 2px orange' }}>
                            <h1>A title</h1>
                        </div>
                        <div className="row" style={{border: 'solid 2px', padding: '48px 0px', textAlign: 'top left' }}>
                            <h4>The description goes here</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FPTCard;