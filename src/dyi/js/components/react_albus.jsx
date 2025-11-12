import React from "react";
import { Step, Steps, Wizard } from "react-albus";
import { Progress } from "reactstrap";

/**
 * @description - library for multi-page form
 *
 * @returns multi-page form
 */
const react_albus = () => {
    return (
        <React.Fragment>
            <Wizard
                render={({ step, steps }) => (
                    <>
                        <Progress
                            animated
                            striped
                            color="success"
                            value={((steps.indexOf(step) + 1) / steps.length) * 100}
                            className="mb-3 progress-sm"
                        />

                        <Steps>
                            {/* first page data */}
                            <Step
                                id="first"
                                render={({ next, push }) => (
                                    <TheFirstPageForm
                                        steps={steps}
                                        step={step}
                                        push={push}
                                        next={next}
                                    />
                                )}
                            />

                            {/* second page data */}
                            <Step
                                id="second"
                                render={({ next, push, previous }) => (
                                    <TheSecondPageForm
                                        steps={steps}
                                        step={step}
                                        push={push}
                                        next={next}
                                        previous={previous}
                                    />
                                )}
                            />

                            {/* agreement page */}
                            <Step
                                id="agreement"
                                render={({ next, push, previous }) => (
                                    <TheAgreementPageForm
                                        steps={steps}
                                        step={step}
                                        push={push}
                                        next={next}
                                        previous={previous}
                                    />
                                )}
                            />
                        </Steps>
                    </>
                )}
            ></Wizard>
        </React.Fragment>
    );
};

export default react_albus;
