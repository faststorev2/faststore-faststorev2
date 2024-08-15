import React, { useState } from 'react';
import { Button } from '@faststore/ui'

interface ModalProductsCategoryProps {
    textDescription: string;
    textButtonAccept: string;
    colorButtonAccept?: string; // Hexadecimal color
    textButtonDecline: string;
    colorButtonDecline?: string; // Hexadecimal color
}

function ModalProductsCategory(props: ModalProductsCategoryProps) {
    const [modal, setModal] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModal(true)}>
                Botão menor de idade
            </Button>
            {modal && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 9
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                        }}
                    >
                        <p>{props.textDescription}</p>
                        <button
                            onClick={() => setModal(false)}
                            style={{
                                backgroundColor: props.colorButtonAccept,
                                padding: '10px 20px',
                                margin: '10px',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            {props.textButtonAccept}
                        </button>
                        <button
                            onClick={() => setModal(false)}
                            style={{
                                backgroundColor: props.colorButtonDecline,
                                padding: '10px 20px',
                                margin: '10px',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            {props.textButtonDecline}
                        </button>
                    </div>
                </div>
            )}
        </>
    )

};

export default ModalProductsCategory;

