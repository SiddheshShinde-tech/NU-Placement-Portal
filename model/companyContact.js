class companyContact {
  constructor(
    PLA_COMPANY_ID,
    EMP_NAME,
    EMP_DESIGNATION,
    EMP_EMAIL_ID,
    EMP_MOBILE_NUMBER,
    ENTRY_DATE
  ) {
    this.PLA_COMPANY_ID = PLA_COMPANY_ID;
    this.EMP_NAME = EMP_NAME;
    this.EMP_DESIGNATION = EMP_DESIGNATION;
    this.EMP_EMAIL_ID = EMP_EMAIL_ID;
    this.EMP_MOBILE_NUMBER = EMP_MOBILE_NUMBER;
    this.ENTRY_DATE = ENTRY_DATE;
  }
}

module.exports = companyContact;
