    function handlePayment() {
        const plan = document.getElementById("planSelect").value;
        const period = document.getElementById("periodSelect").value;

        const urlMap = {
            "MY-MINI PREMIUM": {
                "1MONTH": "https://credit.j-payment.co.jp/link/creditcard?aid=131850&iid=TMM-M-76&mailauthckey=c076c6a685eb489bb67368924efc0dd5",
                "1YEAR": "https://credit.j-payment.co.jp/link/creditcard?aid=131850&iid=TMM-Y-76&mailauthckey=c076c6a685eb489bb67368924efc0dd5"
            },
            "MY-BOX STANDARD": {
                "1MONTH": "https://credit.j-payment.co.jp/link/creditcard?aid=131850&iid=TMB-M-20&mailauthckey=c076c6a685eb489bb67368924efc0dd5",
                "1YEAR": "https://credit.j-payment.co.jp/link/creditcard?aid=131850&iid=TMB-Y-20&mailauthckey=c076c6a685eb489bb67368924efc0dd5"
            },
            "MY-BOX PREMIUM": {
                "1MONTH": "https://credit.j-payment.co.jp/link/creditcard?aid=131850&iid=TMB-M-76&mailauthckey=c076c6a685eb489bb67368924efc0dd5",
                "1YEAR": "https://credit.j-payment.co.jp/link/creditcard?aid=131850&iid=TMB-Y-76&mailauthckey=c076c6a685eb489bb67368924efc0dd5"
            }
        };

        if (!plan || !period) {
            alert("プランと決済期間を選択してください。");
            return;
        }

        const targetUrl = urlMap[plan]?.[period];

        if (targetUrl) {
            window.open(targetUrl, '_blank');
        } else {
            alert("選択された組み合わせには対応する決済リンクが存在しません。");
        }
    }