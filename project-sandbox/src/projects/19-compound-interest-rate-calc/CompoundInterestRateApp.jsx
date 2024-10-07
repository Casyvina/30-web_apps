import React, { useRef, useEffect, useState } from 'react'
import FormGroup from '../components/FormGroup'
import CompoundInterestRateCalc from './CompoundInterestRateCalc'

const CompoundInterestRateApp = () => {
    let inputPrinciple = useRef(null)

    const [compound, setCompound] = useState({
        principleAmount: "",
        monthlyContribution: null,
        interestRate: "",
        years: ""
    })

    useEffect(() => {
        inputPrinciple.current.focus()
    }, [])

    document.body.style.background = `#2174af`

    return (
        <div className='container'>
            <div className="card card-primary bg-warning shadow-md text-dar m-auto mt-4" style={{ maxWidth: 300 }}>
                <div className="card-body">
                    <FormGroup
                        labelText={"Principal amount $"}
                        inputType={"number"}
                        values={compound.principleAmount}
                        reference={inputPrinciple}
                        onChange={(e) => setCompound({ ...compound, principleAmount: e.target.value })}
                    />{" "}
                    <FormGroup
                        labelText={"Monthly contribution $"}
                        inputType={"number"}
                        values={compound.monthlyContribution}
                        onChange={(e) => setCompound({ ...compound, monthlyContribution: e.target.value })}
                    />{" "}
                    <FormGroup
                        labelText={"Interest rate %"}
                        inputType={"number"}
                        values={compound.interestRate}
                        onChange={(e) => setCompound({ ...compound, interestRate: e.target.value })}
                    />{" "}
                    <FormGroup
                        labelText={"Years of investment"}
                        inputType={"number"}
                        values={compound.years}
                        onChange={(e) => setCompound({ ...compound, years: e.target.value })}
                    />
                </div>
                <div className="card-footer text-right fs-l">
                    <CompoundInterestRateCalc
                        prinicipleAmount={compound.principleAmount}
                        monthlyContribution={compound.monthlyContribution}
                        interestRate={compound.interestRate}
                        years={compound.years}
                    />
                </div>
            </div>
        </div>
    )
}

export default CompoundInterestRateApp