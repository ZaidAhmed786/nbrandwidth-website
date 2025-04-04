
import Layout from "@/components/layout/Layout"
export default function RefundPolicy() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Refund Policy">
                <section className="Project-details-section fix section-padding">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                               <div className="col-12">
                               <div className="section-title ">
                                <span className="wow fadeInUp fw-bold">Refund Policy</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Your Rights Regarding Refunds
                                </h2>
                                <p className="fw-medium pt-4">Last Updated on May 9, 2024</p>
                                <p className="fw-medium pt-4">A full refund will be issued if you choose to cancel our services within 5 days of making the payment. If you terminate our services after the initial 5 days, you will be charged an amount equivalent to the working hours put into the project. The balance will be credited to your account within 45 days of cancellation.</p>
                                </div>
                                <div className="d-flex align-items-center gap-3 mt-4">
                                <img src="/assets/img/delete-left-solid.png" alt="icon-img" className='img-fluid' width="25px" />
                                <h4>Cancellation Policy</h4>
                                </div>
                                <p className="pt-3">Cancellation of any agreed upon service should be done 10 days prior to the start of the next billing cycle. Cancellations made after the start of the billing cycle will result in an amount equivalent to the working hours put into the project during that month being billable.</p>
                                <p className="pt-3">If you signed up for our services but did not make use of them, you are still entitled to pay us. The amount of refund will be credited to the account from which the payment was made within 45 days of service cancellation.</p>
                                <p className="pt-5">
                                Write us at: <a href="mailto:sales@nbandwidth.com "  style={{color: "#06A3DA"}}>sales@nbandwidth.com </a>
                                </p>
                               </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}