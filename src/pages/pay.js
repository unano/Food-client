import React, { useState } from 'react';
import StripeCheckout from "react-stripe-checkout";
import { postOrder } from "../api/api";
import { useNavigate } from "react-router-dom";
const Pay = ({ phone, money }) => {
    const navigate = useNavigate();
    function doHandleDate() {
        var myDate = new Date();
        var tYear = myDate.getFullYear();
        var tMonth = myDate.getMonth();
        var tDay = myDate.getDate();

        var m = tMonth + 1;
        if (m.toString().length === 1) {
            m = "0" + m;
        }
        if (tDay.toString().length === 1) {
            tDay = "0" + tDay;
        }
        return tYear + '-' + m + '-' + tDay;
    }

    // function createId() {
    //     var myDate = new Date();
    //     var date = myDate.getTime();
    //     var id = username + "$" + date + "$" + askedUsername;
    //     return id;
    // }

    const [product, setProduct] = useState({
        name: "React from DB",
        price: parseInt(money) * 100,
        productBy: "one"
    })

    const post = async () => {
        var date = doHandleDate();
        // var questionId = createId();
        await postOrder(phone, money, date);
        jump();
    }

    const jump =() =>{
        navigate('/personal');
    }

    const makePayment = token => {
        const body = {
            product,
            token
        }
        const headers = {
            "Content-Type": "application/json"
        }

        return fetch(`/api/payment`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(body)
        }).then(response => {
            console.log("RESPONSE", response)
            const { status } = response;
            console.log("STATUS", status)
            post();
        })
            .catch(error => console.log(error))
    }

    return (
        <>
            <StripeCheckout
                stripeKey={process.env.REACT_APP_PAY_KEY}
                token={makePayment}
                name="Payment"
                amount={product.price}
            >
            </StripeCheckout>
        </>
    );
}

export default Pay;