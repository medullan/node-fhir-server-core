exports.RESOURCES = {
	ACCOUNT: 'Account',
    ACTIVITYDEFINITION: 'ActivityDefinition',
    ADVERSEEVENT: 'AdverseEvent',
    ALLERGYINTOLERANCE: 'AllergyIntolerance',
    APPOINTMENT: 'Appointment',
    APPOINTMENTRESPONSE: 'AppointmentResponse',
    AUDITEVENT: 'AuditEvent',
    BASIC: 'Basic',
    BINARY: 'Binary',
    BODYSITE: 'BodySite',
    BUNDLE: 'Bundle',
    CAPABILITYSTATEMENT: 'CapabilityStatement',
    CAREPLAN: 'CarePlan',
    CARETEAM: 'CareTeam',
    CHARGEITEM: 'ChargeItem',
    CLAIM: 'Claim',
    CLAIMRESPONSE: 'ClaimResponse',
    CLINICALIMPRESSION: 'ClinicalImpression',
    CODESYSTEM: 'CodeSystem',
    COMMUNICATION: 'Communication',
    COMMUNICATIONREQUEST: 'CommunicationRequest',
    COMPARTMENTDEFINITION: 'CompartmentDefinition',
    COMPOSITION: 'Composition',
    CONCEPTMAP: 'ConceptMap',
    CONDITION: 'Condition',
    CONSENT: 'Consent',
    CONTRACT: 'Contract',
    COVERAGE: 'Coverage',
    DATAELEMENT: 'DataElement',
    DETECTEDISSUE: 'DetectedIssue',
    DEVICE: 'Device',
    DEVICECOMPONENT: 'DeviceComponent',
    DEVICEMETRIC: 'DeviceMetric',
    DEVICEREQUEST: 'DeviceRequest',
    DEVICEUSESTATEMENT: 'DeviceUseStatement',
    DIAGNOSTICREPORT: 'DiagnosticReport',
    DOCUMENTMANIFEST: 'DocumentManifest',
    DOCUMENTREFERENCE: 'DocumentReference',
    ELIGIBILITYREQUEST: 'EligibilityRequest',
    ELIGIBILITYRESPONSE: 'EligibilityResponse',
    ENCOUNTER: 'Encounter',
    ENDPOINT: 'Endpoint',
    ENROLLMENTREQUEST: 'EnrollmentRequest',
    ENROLLMENTRESPONSE: 'EnrollmentResponse',
    EPISODEOFCARE: 'EpisodeOfCare',
    EXPANSIONPROFILE: 'ExpansionProfile',
    EXPLANATIONOFBENEFIT: 'ExplanationOfBenefit',
    FAMILYMEMBERHISTORY: 'FamilyMemberHistory',
    FLAG: 'Flag',
    GOAL: 'Goal',
    GRAPHDEFINITION: 'GraphDefinition',
    GROUP: 'Group',
    GUIDANCERESPONSE: 'GuidanceResponse',
    HEALTHCARESERVICE: 'HealthcareService',
    IMAGINGMANIFEST: 'ImagingManifest',
    IMAGINGSTUDY: 'ImagingStudy',
    IMMUNIZATION: 'Immunization',
    IMMUNIZATIONRECOMMENDATION: 'ImmunizationRecommendation',
    IMPLEMENTATIONGUIDE: 'ImplementationGuide',
    LIBRARY: 'Library',
    LINKAGE: 'Linkage',
    LIST: 'List',
    LOCATION: 'Location',
    MEASURE: 'Measure',
    MEASUREREPORT: 'MeasureReport',
    MEDIA: 'Media',
    MEDICATION: 'Medication',
    MEDICATIONADMINISTRATION: 'MedicationAdministration',
    MEDICATIONDISPENSE: 'MedicationDispense',
    MEDICATIONREQUEST: 'MedicationRequest',
    MEDICATIONSTATEMENT: 'MedicationStatement',
    MESSAGEDEFINITION: 'MessageDefinition',
    MESSAGEHEADER: 'MessageHeader',
    META: 'Meta',
    NAMINGSYSTEM: 'NamingSystem',
    NUTRITIONORDER: 'NutritionOrder',
    OBSERVATION: 'Observation',
    OPERATIONDEFINITION: 'OperationDefinition',
    ORGANIZATION: 'Organization',
    PATIENT: 'Patient',
    PAYMENTNOTICE: 'PaymentNotice',
    PAYMENTRECONCILIATION: 'PaymentReconciliation',
    PERSON: 'Person',
    PLANDEFINITION: 'PlanDefinition',
    PRACTITIONER: 'Practitioner',
    PRACTITIONERROLE: 'PractitionerRole',
    PROCEDURE: 'Procedure',
    PROCEDUREREQUEST: 'ProcedureRequest',
    PROCESSREQUEST: 'ProcessRequest',
    PROCESSRESPONSE: 'ProcessResponse',
    PROVENANCE: 'Provenance',
    QUESTIONNAIRE: 'Questionnaire',
    QUESTIONNAIRERESPONSE: 'QuestionnaireResponse',
    REFERRALREQUEST: 'ReferralRequest',
    RELATEDPERSON: 'RelatedPerson',
    REQUESTGROUP: 'RequestGroup',
    RESEARCHSTUDY: 'ResearchStudy',
    RESEARCHSUBJECT: 'ResearchSubject',
    RISKASSESSMENT: 'RiskAssessment',
    SCHEDULE: 'Schedule',
    SEARCHPARAMETER: 'SearchParameter',
    SEQUENCE: 'Sequence',
    SERVICEDEFINITION: 'ServiceDefinition',
    SLOT: 'Slot',
    SPECIMEN: 'Specimen',
    STRUCTUREDEFINITION: 'StructureDefinition',
    STRUCTUREMAP: 'StructureMap',
    SUBSCRIPTION: 'Subscription',
    SUBSTANCE: 'Substance',
    SUPPLYDELIVERY: 'SupplyDelivery',
    SUPPLYREQUEST: 'SupplyRequest',
    TASK: 'Task',
    TESTREPORT: 'TestReport',
    TESTSCRIPT: 'TestScript',
    VALUESET: 'ValueSet',
    VISIONPRESCRIPTION: 'VisionPrescription'
};

exports.ISSUE = {
	SEVERITY: {
		FATAL: 'fatal',
		ERROR: 'error',
		WARNING: 'warning',
		INFO: 'information'
	},
	// Codes defined here: https://www.hl7.org/fhir/valueset-issue-type.html
	CODE: {
		// Invalid can be seen as a parent essentially to these, see Level on above url
		// This means structure, required, value, and invariant, are all also invalid
		// you can send invalid back or something more specific
		INVALID: 'invalid',
		STRUCTURE: 'structure',
		REQUIRED: 'required',
		VALUE: 'value',
		INVARIANT: 'invariant',
		// Security is parent of login, unknown, expired, forbidden, and surpressed
		SECURITY: 'security',
		LOGIN: 'login',
		UNKNOWN: 'unknown',
		EXPIRED: 'expired',
		FORBIDDEN: 'forbidden',
		SUPPRESSED: 'surpressed',
		// Procesing has no parent/children
		PROCESSING: 'processing',
		// Not Supported is parent of duplicate, not found, and too long
		NOT_SUPPORTED: 'not-supported',
		DUPLICATE: 'duplicate',
		NOT_FOUND: 'not-found',
		TOO_LONG: 'too-long',
		// Code invalid is parent of extension, too costly, business rule, conflict, and incomplete
		CODE_INVALID: 'code-invalid',
		EXTENSION: 'extension',
		TOO_COSTLY: 'too-costly',
		BUSINESS_RULE: 'business-rule',
		CONFLICT: 'conflict',
		INCOMPLETE: 'incomplete',
		// Transient is parent of lock error, no store, exception, timeout, and throttled
		TRANSIENT: 'transient',
		LOCK_ERROR: 'lock-error',
		NO_STORE: 'no-store',
		EXCEPTION: 'exception',
		TIMEOUT: 'timeout',
		THROTTLED: 'throttled',
		// Informational has no parent/children
		INFORMATIONAL: 'informational'
	}
};

/**
* Interactions Types.  Also the name of the controller methods
*/
exports.INTERACTIONS = {
	SEARCH: 'search',
	SEARCH_BY_ID: 'searchById',
	SEARCH_BY_VID: 'searchByVersionId',
	HISTORY: 'history',
	HISTORY_BY_ID: 'historyById',
	CREATE: 'create',
	UPDATE: 'update',
	DELETE: 'remove'
};

/**
* These are currently the only versions we support
*/
exports.VERSIONS = {
	'1_0_2': '1_0_2',
	'3_0_1': '3_0_1'
};

/**
* Custom events we support
*/
exports.EVENTS = {
	AUDIT: 'audit-event',
	PROVENANCE: 'provenance'
};
