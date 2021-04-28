module.exports = {
    contractPackage: {
        abi: {
            "ABI version": 2,
            "header": ["time", "expire"],
            "functions": [{
                    "name": "constructor",
                    "inputs": [],
                    "outputs": []
                },
                {
                    "name": "addMembers",
                    "inputs": [
                        { "name": "newMember", "type": "address" }
                    ],
                    "outputs": []
                },
                {
                    "name": "removeMembers",
                    "inputs": [
                        { "name": "oldmember", "type": "address" }
                    ],
                    "outputs": []
                },
                {
                    "name": "requestLoan",
                    "inputs": [
                        { "name": "description", "type": "bytes" },
                        { "name": "value", "type": "uint128" }
                    ],
                    "outputs": [
                        { "components": [{ "name": "description", "type": "bytes" }, { "name": "value", "type": "uint128" }, { "name": "complete", "type": "bool" }, { "name": "approvalCount", "type": "uint256" }, { "name": "approvals", "type": "map(address,bool)" }, { "name": "personLoan", "type": "address" }], "name": "value0", "type": "tuple" }
                    ]
                },
                {
                    "name": "approveLoan",
                    "inputs": [
                        { "name": "index", "type": "uint256" }
                    ],
                    "outputs": []
                },
                {
                    "name": "passLoan",
                    "inputs": [
                        { "name": "index", "type": "uint256" }
                    ],
                    "outputs": []
                },
                {
                    "name": "sendMonthlyContribution",
                    "inputs": [
                        { "name": "amount", "type": "uint128" },
                        { "name": "bounce", "type": "bool" }
                    ],
                    "outputs": []
                },
                {
                    "name": "microInsurance",
                    "inputs": [
                        { "name": "fullName", "type": "bytes" }
                    ],
                    "outputs": [
                        { "components": [{ "name": "isActive", "type": "bool" }, { "name": "amount", "type": "uint128" }, { "name": "personrequire", "type": "address" }, { "name": "timestamp", "type": "uint32" }, { "name": "complete", "type": "bool" }, { "name": "FullName", "type": "bytes" }], "name": "value0", "type": "tuple" }
                    ]
                },
                {
                    "name": "triggerInsurance",
                    "inputs": [
                        { "name": "insureNumber", "type": "uint256" }
                    ],
                    "outputs": [
                        { "components": [{ "name": "isActive", "type": "bool" }, { "name": "amount", "type": "uint128" }, { "name": "personrequire", "type": "address" }, { "name": "timestamp", "type": "uint32" }, { "name": "complete", "type": "bool" }, { "name": "FullName", "type": "bytes" }], "name": "value0", "type": "tuple" }
                    ]
                },
                {
                    "name": "expireInsurance",
                    "inputs": [
                        { "name": "index", "type": "uint256" }
                    ],
                    "outputs": [
                        { "components": [{ "name": "isActive", "type": "bool" }, { "name": "amount", "type": "uint128" }, { "name": "personrequire", "type": "address" }, { "name": "timestamp", "type": "uint32" }, { "name": "complete", "type": "bool" }, { "name": "FullName", "type": "bytes" }], "name": "value0", "type": "tuple" }
                    ]
                },
                {
                    "name": "renewInsurance",
                    "inputs": [
                        { "name": "index", "type": "uint256" }
                    ],
                    "outputs": [
                        { "components": [{ "name": "isActive", "type": "bool" }, { "name": "amount", "type": "uint128" }, { "name": "personrequire", "type": "address" }, { "name": "timestamp", "type": "uint32" }, { "name": "complete", "type": "bool" }, { "name": "FullName", "type": "bytes" }], "name": "value0", "type": "tuple" }
                    ]
                },
                {
                    "name": "initiateProject",
                    "inputs": [
                        { "name": "projectName", "type": "bytes" },
                        { "name": "description", "type": "bytes" },
                        { "name": "amount", "type": "uint128" }
                    ],
                    "outputs": [
                        { "components": [{ "name": "description", "type": "bytes" }, { "name": "amount", "type": "uint128" }, { "name": "condition", "type": "uint8" }, { "name": "agree", "type": "uint256" }, { "name": "name", "type": "bytes" }], "name": "value0", "type": "tuple" }
                    ]
                },
                {
                    "name": "approveProject",
                    "inputs": [
                        { "name": "index", "type": "uint256" }
                    ],
                    "outputs": [
                        { "components": [{ "name": "description", "type": "bytes" }, { "name": "amount", "type": "uint128" }, { "name": "condition", "type": "uint8" }, { "name": "agree", "type": "uint256" }, { "name": "name", "type": "bytes" }], "name": "value0", "type": "tuple" }
                    ]
                },
                {
                    "name": "passProjectFunds",
                    "inputs": [
                        { "name": "index", "type": "uint256" }
                    ],
                    "outputs": []
                },
                {
                    "name": "minimumContribution",
                    "inputs": [],
                    "outputs": [
                        { "name": "minimumContribution", "type": "uint128" }
                    ]
                },
                {
                    "name": "members",
                    "inputs": [],
                    "outputs": [
                        { "name": "members", "type": "map(address,bool)" }
                    ]
                },
                {
                    "name": "bankAddress",
                    "inputs": [],
                    "outputs": [
                        { "name": "bankAddress", "type": "address" }
                    ]
                },
                {
                    "name": "approversCount",
                    "inputs": [],
                    "outputs": [
                        { "name": "approversCount", "type": "uint256" }
                    ]
                },
                {
                    "name": "timestamp",
                    "inputs": [],
                    "outputs": [
                        { "name": "timestamp", "type": "uint32" }
                    ]
                }
            ],
            "data": [],
            "events": [{
                "name": "LoanApproved",
                "inputs": [
                    { "name": "text", "type": "bytes" },
                    { "name": "amount", "type": "uint128" },
                    { "name": "timestamp", "type": "uint32" }
                ],
                "outputs": []
            }]
        }
    }
};