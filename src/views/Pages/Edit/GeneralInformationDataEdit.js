import React, { useState, useEffect } from "react";
import axios from "axios";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Tr,
  Td,
  Input,
  useColorModeValue,
  Button,
  FormControl,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

function GeneralInformationDataEdit(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  var roll_no,reg_no,sname,name_siblings,aadhar_no,email,licet_email,batch,dept,quota,gender,dob,nationality,contact_no,father_name,mother_name,father_mob_no,mother_mob_no,community,religion,if_catholic_parish,dalit_catholic_yn,present_address,permanent_address,blood_group,mother_tongue,lang_know,pan,father_qualification,mother_qualification,father_occupation,mother_occupation,father_office_address,mother_office_address,father_annual_income,mother_annual_income,father_email,mother_email,guardian_name,guardian_qualification,guardian_occupation,guardian_office_address,guardian_annual_income,guardian_mob_no,guardian_email,no_of_siblings,name_siblings,qualification_siblings,occupation_siblings,alumni_licet_loyola_yn,application_no,date_of_ad,regular_lateral_rl,dayschl_hosteller_dh,scholarship_name,scholarship_amount,first_graduate_yn,eco_backward_yn,programming_languages,software_proficiency,dept_rel_proficiency,certifications,other_skills,aptitude_analytical_skills,communication_skills,social_media_exposure,leadership_skills,other_interpersonal_skills,short_term_goal,long_term_goal,membership_name,membership_no,membership_duration,hse_school_name,hse_board,hse_medium,hse_sec_lang,hse_group,hse_marks,hse_percentage,hse_cutoff,hse_attempts,sslc_school_name,sslc_board,sslc_medium,sslc_sec_lang,sslc_marks,sslc_percentage,sslc_attempts;
  const [data, setData] = useState([]);

  let params = new URLSearchParams();
  params.append("RollNumber", localStorage.getItem("generalStudent"));

  axios.post("http://localhost:5000/GeneralData", params).then((items) => {
    setData(items.data);
  });
  data.map((item)=>{
    sname=item.sname,
    roll_no=item.roll_no,
    reg_no=item.reg_no,
    gender=item.gender,
    dob=item.dob,
    dept=item.dept,
    batch=item.batch,
    nationality=item.nationality,
    religion=item.religion,
    if_catholic_parish=item.if_catholic_parish,
    dalit_catholic_yn=item.dalit_catholic_yn,
    community=item.community,
    blood_group=item.blood_group,
    mother_tongue=item.mother_tongue,
    contact_no=item.contact_no,
    aadhar_no=item.aadhar_no,
    licet_email=item.licet_email,
    email=item.email,
    present_address=item.present_address,
    permanent_address=item.permanent_address,
    lang_know=item.lang_know,
    pan=item.pan,
    hse_school_name=item.hse_school_name,
    hse_board=item.hse_board,
    hse_medium=item.hse_medium,
    hse_sec_lang=item.hse_sec_lang,
    hse_group=item.hse_group,
    hse_marks=item.hse_marks,
    hse_percentage=item.hse_percentage,
    hse_cutoff=item.hse_cutoff,
    hse_attempts=item.hse_attempts,
    sslc_school_name=item.sslc_school_name,
    sslc_board=item.sslc_board,
    sslc_medium=item.sslc_medium,
    sslc_sec_lang=item.sslc_sec_lang,
    sslc_marks=item.sslc_marks,
    sslc_percentage=item.sslc_percentage,
    sslc_attempts=item.sslc_attempts,
    father_name=item.father_name,
    father_qualification=item.father_office_address,
    father_occupation=item.father_occupation,
    father_office_address=item.father_office_address,
    father_annual_income=item.father_annual_income,
    father_mob_no=item.father_mob_no,
    father_email=item.father_email,
    guardian_name=item.guardian_name,
    guardian_qualification=item.guardian_qualification,
    guardian_occupation=item.guardian_occupation,
    guardian_office_address=item.guardian_office_address,
    guardian_annual_income=item.guardian_annual_income,
    guardian_mob_no=item.guardian_mob_no,
    guardian_email=item.guardian_email,
    mother_name=item.mother_name,
    mother_qualification=item.mother_qualification,
    mother_occupation=item.mother_occupation,
    mother_office_address=item.mother_office_address,
    mother_annual_income=item.mother_annual_income,
    mother_mob_no=item.mother_mob_no,
    mother_email=item.mother_email,
    no_of_siblings=item.no_of_siblings,
    name_siblings=item.name_siblings,      
    qualification_siblings=item.qualification_siblings,
    occupation_siblings=item.occupation_siblings,
    alumni_licet_loyola_yn=item.alumni_licet_loyola_yn,
    application_no=item.application_no,
    date_of_ad=item.date_of_ad,
    quota=item.quota,
    regular_lateral_rl=item.regular_lateral_rl,
    dayschl_hosteller_dh=item.dayschl_hosteller_dh,
    scholarship_name=item.scholarship_name,
    scholarship_amount=item.scholarship_amount,
    first_graduate_yn=item.first_graduate_yn,
    eco_backward_yn=item.eco_backward_yn,
    programming_languages=item.programming_languages,
    software_proficiency=item.software_proficiency,
    dept_rel_proficiency=item.dept_rel_proficiency,
    certifications=item.certifications,
    other_skills=item.other_skills,
    aptitude_analytical_skills=item.aptitude_analytical_skills,
    communication_skills=item.communication_skills,
    social_media_exposure=item.social_media_exposure,
    leadership_skills=item.leadership_skills,
    other_interpersonal_skills=item.other_interpersonal_skills,
    short_term_goal=item.short_term_goal,
    long_term_goal=item.long_term_goal,
    membership_name=item.membership_name,
    membership_no=item.membership_no,
    membership_duration=item.membership_duration
  })
  function funedit() {
    let params = new URLSearchParams();
    params.append("RollNumber", localStorage.getItem("generalStudent"));
    if (document.getElementById("NID").value.length !== 0) {
      params.append("name", document.getElementById("NID").value);
    } else {
      params.append("name", sname);
    }
    if (document.getElementById("REID").value.length !== 0) {
      params.append("registerno", document.getElementById("REID").value);
    } else {
      params.append("registerno", reg_no);
    }
    if (document.getElementById("SID").value.length !== 0) {
      params.append("sex", document.getElementById("SID").value);
    } else {
      params.append("sex", gender);
    }
    if (document.getElementById("DOBID").value.length !== 0) {
      params.append("dateofbirth", document.getElementById("DOBID").value);
    } else {
      params.append("dateofbirth", dob);
    }
    if (document.getElementById("DEPT").value.length !== 0) {
      params.append("dep", document.getElementById("DEPT").value);
    } else {
      params.append("dep", dept);
    }
    if (document.getElementById("BATCH").value.length !== 0) {
      params.append("bat", document.getElementById("BATCH").value);
    } else {
      params.append("bat", batch);
    }
    if (document.getElementById("NATIONID").value.length !== 0) {
      params.append("nationality", document.getElementById("NATIONID").value);
    } else {
      params.append("nationality", nationality);
    }
    if (document.getElementById("RELIGIONID").value.length !== 0) {
      params.append("religion", document.getElementById("RELIGIONID").value);
    } else {
      params.append("religion", religion);
    }
    if (document.getElementById("PARISHID").value.length !== 0) {
      params.append("parish", document.getElementById("PARISHID").value);
    } else {
      params.append("parish", if_catholic_parish);
    }
    if (document.getElementById("DALITID").value.length !== 0) {
      params.append("dalit", document.getElementById("DALITID").value);
    } else {
      params.append("dalit", dalit_catholic_yn);
    }
    if (document.getElementById("COMMUNITYID").value.length !== 0) {
      params.append("community", document.getElementById("COMMUNITYID").value);
    } else {
      params.append("community", community);
    }
    if (document.getElementById("BLOODID").value.length !== 0) {
      params.append("bloodgroup", document.getElementById("BLOODID").value);
    } else {
      params.append("bloodgroup", blood_group);
    }
    if (document.getElementById("AADHARID").value.length !== 0) {
      params.append("aadhar", document.getElementById("AADHARID").value);
    } else {
      params.append("aadhar", aadhar_no);
    }
    if (document.getElementById("MOTHERID").value.length !== 0) {
      params.append("mothertongue", document.getElementById("MOTHERID").value);
    } else {
      params.append("mothertongue", mother_tongue);
    }
    if (document.getElementById("CONTACTID").value.length !== 0) {
      params.append("contact", document.getElementById("CONTACTID").value);
    } else {
      params.append("contact", contact_no);
    }
    if (document.getElementById("PEREMID").value.length !== 0) {
      params.append("peremail", document.getElementById("PEREMID").value);
    } else {
      params.append("peremail", email);
    }
    if (document.getElementById("PREADDRID").value.length !== 0) {
      params.append("preaddr", document.getElementById("PREADDRID").value);
    } else {
      params.append("preaddr", present_address);
    }
    if (document.getElementById("PERADDRID").value.length !== 0) {
      params.append("peraddr", document.getElementById("PERADDRID").value);
    } else {
      params.append("peraddr", permanent_address);
    }
    if (document.getElementById("LANKNOW").value.length !== 0) {
      params.append("langknow", document.getElementById("LANKNOW").value);
    } else {
      params.append("langknow", lang_know);
    }
    if (document.getElementById("PAN").value.length !== 0) {
      params.append("pano", document.getElementById("PAN").value);
    } else {
      params.append("pano", pan);
    }
   


    if(document.getElementById("NOS1").value.length !== 0){  
      params.append("hsenos", document.getElementById("NOS1").value);
    }else{
      params.append("hsenos", hse_school_name);
    }
    if(document.getElementById("BOARD1").value.length !== 0){  
      params.append("hsebod", document.getElementById("BOARD1").value);
    }else{
      params.append("hsebod", hse_board);
    }
    if(document.getElementById("MOI1").value.length !== 0){  
      params.append("hsemoi", document.getElementById("MOI1").value);
    }else{
      params.append("hsemoi", hse_medium);
    }
    if(document.getElementById("SL1").value.length !== 0){  
      params.append("hsesl", document.getElementById("SL1").value);
    }else{
      params.append("hsesl", hse_sec_lang);
    }
    if(document.getElementById("GROUP1").value.length !== 0){  
      params.append("hsegro", document.getElementById("GROUP1").value);
    }else{
      params.append("hsegro", hse_group);
    }
    if(document.getElementById("TM1").value.length !== 0){  
      params.append("hsetm", document.getElementById("TM1").value);
    }else{
      params.append("hsetm", hse_marks);
    }    
    if(document.getElementById("OP1").value.length !== 0){  
      params.append("hseop", document.getElementById("OP1").value);
    }else{
      params.append("hseop", hse_percentage);
    }    
    if(document.getElementById("COM1").value.length !== 0){  
      params.append("hsecom", document.getElementById("COM1").value);
    }else{
      params.append("hsecom", hse_cutoff);
    }    
    if(document.getElementById("NOA1").value.length !== 0){  
      params.append("hsenoa", document.getElementById("NOA1").value);
    }else{
      params.append("hsenoa", hse_attempts);
    }    

    if(document.getElementById("NOS2").value.length !== 0){  
      params.append("sslcnos", document.getElementById("NOS2").value);
    }else{
      params.append("sslcnos", sslc_school_name);
    }    
    if(document.getElementById("BOARD2").value.length !== 0){  
      params.append("sslcbod", document.getElementById("BOARD2").value);
    }else{
      params.append("sslcbod", sslc_board);
    }    
    if(document.getElementById("MOI2").value.length !== 0){  
      params.append("sslcmoi", document.getElementById("MOI2").value);
    }else{
      params.append("sslcmoi", sslc_medium);
    }    
    if(document.getElementById("SL2").value.length !== 0){  
      params.append("sslcsl", document.getElementById("SL2").value);
    }else{
      params.append("sslcsl", sslc_sec_lang);
    }    
    if(document.getElementById("TM2").value.length !== 0){  
      params.append("sslctm", document.getElementById("TM2").value);
    }else{
      params.append("sslctm", sslc_marks);
    }    
    if(document.getElementById("OP2").value.length !== 0){  
      params.append("sslcop", document.getElementById("OP2").value);
    }else{
      params.append("sslcop", sslc_percentage);
    }    
    if(document.getElementById("NOA2").value.length !== 0){  
      params.append("sslcnoa", document.getElementById("NOA2").value);    
    }else{
      params.append("sslcnoa", sslc_attempts);    
    }   
    if(document.getElementById("FN").value.length !== 0){  
      params.append("fana", document.getElementById("FN").value);
    }else{
      params.append("fana", father_name);
    }   
    if(document.getElementById("FAQUA").value.length !== 0){  
      params.append("faq", document.getElementById("FAQUA").value);
    }else{
      params.append("faq", father_qualification);
    }   
    if(document.getElementById("FAOC").value.length !== 0){  
      params.append("faocc", document.getElementById("FAOC").value);
    }else{
      params.append("faocc", father_occupation);
    }   
    if(document.getElementById("FAOFAD").value.length !== 0){  
      params.append("faoff", document.getElementById("FAOFAD").value);
    }else{
      params.append("faoff", father_office_address);
    }    
    if(document.getElementById("FAANIN").value.length !== 0){  
      params.append("fainc", document.getElementById("FAANIN").value);
    }else{
      params.append("fainc", father_annual_income);
    }   
    if(document.getElementById("FAMOB").value.length !== 0){  
      params.append("fano", document.getElementById("FAMOB").value);
    }else{
      params.append("fano", father_mob_no);
    }   
    if(document.getElementById("FAEM").value.length !== 0){  
      params.append("famail", document.getElementById("FAEM").value);
    }else{
      params.append("famail", father_email);
    }   
    if(document.getElementById("GANA").value.length !== 0){  
      params.append("gname", document.getElementById("GANA").value);
    }else{
      params.append("gname", guardian_name);
    }   
    if(document.getElementById("GAQUA").value.length !== 0){  
      params.append("gqua", document.getElementById("GAQUA").value);
    }else{
      params.append("gqua", guardian_qualification);
    }   
    if(document.getElementById("GAOCC").value.length !== 0){  
      params.append("gocc", document.getElementById("GAOCC").value);
    }else{
      params.append("gocc", guardian_occupation);
    }   
    if(document.getElementById("GAOFAD").value.length !== 0){  
      params.append("goff", document.getElementById("GAOFAD").value);
    }else{
      params.append("goff", guardian_office_address);
    }   
    if(document.getElementById("GAANIN").value.length !== 0){  
      params.append("ginc", document.getElementById("GAANIN").value);
    }else{
      params.append("ginc", guardian_annual_income);
    }   
    if(document.getElementById("GAMOB").value.length !== 0){  
      params.append("gmob", document.getElementById("GAMOB").value);
    }else{
      params.append("gmob", guardian_mob_no);
    }   
    if(document.getElementById("GAEM").value.length !== 0){  
      params.append("gamail", document.getElementById("GAEM").value);
    }else{
      params.append("gamail", guardian_email);
    }   
    if(document.getElementById("MN").value.length !== 0){  
      params.append("mname", document.getElementById("MN").value);
    }else{
      params.append("mname", mother_name);
    }   
    if(document.getElementById("MOQUA").value.length !== 0){  
      params.append("mqua", document.getElementById("MOQUA").value);
    }else{
      params.append("mqua", mother_qualification);
    }   
    if(document.getElementById("MOOC").value.length !== 0){  
      params.append("moocc", document.getElementById("mqua").value);
    }else{
      params.append("moocc", mother_occupation);
    }   
    if(document.getElementById("MOOFAD").value.length !== 0){  
      params.append("moff", document.getElementById("MOOFAD").value);
    }else{
      params.append("moff", mother_office_address);
    }   
    if(document.getElementById("MOANIN").value.length !== 0){  
      params.append("minc", document.getElementById("MOANIN").value);
    }else{
      params.append("minc", mother_annual_income);
    }   
    if(document.getElementById("MOMOB").value.length !== 0){  
      params.append("mno", document.getElementById("MOMOB").value);
    }else{
      params.append("mno", mother_mob_no);
    }   
    if(document.getElementById("MOEM").value.length !== 0){  
      params.append("memail", document.getElementById("MOEM").value);
    }else{
      params.append("memail", mother_email);
    }   
    if(document.getElementById("NOSIB").value.length !== 0){  
      params.append("nsib", document.getElementById("NOSIB").value);
    }else{
      params.append("nsib", no_of_siblings);
    } 
    if(document.getElementById("NASIB").value.length !== 0){  
      params.append("nmsib", document.getElementById("NASIB").value);
    }else{
      params.append("nmsib", name_siblings);
    } 
    if(document.getElementById("QUASIB").value.length !== 0){  
      params.append("qsib", document.getElementById("QUASIB").value);
    }else{
      params.append("qsib", qualification_siblings);
    } 
    if(document.getElementById("OCCSIB").value.length !== 0){  
      params.append("siboc", document.getElementById("OCCSIB").value);
    }else{
      params.append("siboc", occupation_siblings);
    } 
    if(document.getElementById("ALUMNILL").value.length !== 0){  
      params.append("llalumni", document.getElementById("ALUMNILL").value);
    }else{
      params.append("llalumni", alumni_licet_loyola_yn);
    } 
    if(document.getElementById("APPNO").value.length !== 0){  
      params.append("apno", document.getElementById("APPNO").value);
    }else{
      params.append("apno", application_no);
    } 
    if(document.getElementById("DOA").value.length !== 0){  
      params.append("doad", document.getElementById("DOA").value);
    }else{
      params.append("doad", date_of_ad);
    } 
    if(document.getElementById("QUOTA").value.length !== 0){  
      params.append("qta", document.getElementById("QUOTA").value);
    }else{
      params.append("qta", quota);
    } 
    if(document.getElementById("RELA").value.length !== 0){  
      params.append("regla", document.getElementById("RELA").value);
    }else{
      params.append("regla", regular_lateral_rl);
    } 
    if(document.getElementById("DAHO").value.length !== 0){  
      params.append("dayho", document.getElementById("DAHO").value);
    }else{
      params.append("dayho", dayschl_hosteller_dh);
    } 
    if(document.getElementById("SCHONM").value.length !== 0){  
      params.append("scname", document.getElementById("SCHONM").value);
    }else{
      params.append("scname", scholarship_name);
    } 
    if(document.getElementById("SCHOAMT").value.length !== 0){  
      params.append("scamt", document.getElementById("SCHOAMT").value);
    }else{
      params.append("scamt", scholarship_amount);
    } 
    if(document.getElementById("FIRGRA").value.length !== 0){  
      params.append("firstgra", document.getElementById("FIRGRA").value);
    }else{
      params.append("firstgra", first_graduate_yn);
    } 
    if(document.getElementById("ECOBK").value.length !== 0){  
      params.append("ecoback", document.getElementById("ECOBK").value);
    }else{
      params.append("ecoback", eco_backward_yn);
    } 
    if(document.getElementById("PROLAN").value.length !== 0){  
      params.append("proglan", document.getElementById("PROLAN").value);
    }else{
      params.append("proglan", programming_languages);
    } 
    if(document.getElementById("SOFTPRO").value.length !== 0){  
      params.append("sopro", document.getElementById("SOFTPRO").value);
    }else{
      params.append("sopro", software_proficiency);
    } 
    if(document.getElementById("DEPRELPRO").value.length !== 0){  
      params.append("deprel", document.getElementById("DEPRELPRO").value);
    }else{
      params.append("deprel", dept_rel_proficiency);
    } 
    if(document.getElementById("CERTI").value.length !== 0){  
      params.append("cer", document.getElementById("CERTI").value);
    }else{
      params.append("cer", certifications);
    } 
    if(document.getElementById("OTHERTECSKILL").value.length !== 0){  
      params.append("ots", document.getElementById("OTHERTECSKILL").value);
    }else{
      params.append("ots", other_skills);
    } 
    if(document.getElementById("APANA").value.length !== 0){  
      params.append("aptana", document.getElementById("APANA").value);
    }else{
      params.append("aptana", aptitude_analytical_skills);
    } 
    if(document.getElementById("COMSKILL").value.length !== 0){  
      params.append("cskill", document.getElementById("COMSKILL").value);
    }else{
      params.append("cskill", communication_skills);
    } 
    if(document.getElementById("SOMEEX").value.length !== 0){  
      params.append("sox", document.getElementById("SOMEEX").value);
    }else{
      params.append("sox", social_media_exposure);
    } 
    if(document.getElementById("LEADSKILL").value.length !== 0){  
      params.append("lskill", document.getElementById("LEADSKILL").value);
    }else{
      params.append("lskill", leadership_skills);
    } 
    if(document.getElementById("OINTSKILL").value.length !== 0){  
      params.append("oskill", document.getElementById("OINTSKILL").value);
    }else{
      params.append("oskill", other_interpersonal_skills);
    } 
    if(document.getElementById("SHOGOAL").value.length !== 0){  
      params.append("sgoal", document.getElementById("SHOGOAL").value);
    }else{
      params.append("sgoal", short_term_goal);
    } 
    if(document.getElementById("LONGGOAL").value.length !== 0){  
      params.append("lgoal", document.getElementById("LONGGOAL").value);
    }else{
      params.append("lgoal", long_term_goal);
    } 
    if(document.getElementById("MEMBNAME").value.length !== 0){  
      params.append("membn", document.getElementById("MEMBNAME").value);
    }else{
      params.append("membn", membership_name);
    } 
    if(document.getElementById("MEMBNO").value.length !== 0){  
      params.append("membnum", document.getElementById("MEMBNO").value);
    }else{
      params.append("membnum", membership_no);
    } 
    if(document.getElementById("MEMBDUR").value.length !== 0){  
      params.append("memd", document.getElementById("MEMBDUR").value);
    }else{
      params.append("memd", membership_duration);
    } 



    axios.post("http://localhost:5000/GeneralDataEdit", params);
    window.location.href="http://localhost:3000/Class-Advisor#/admin2/GeneralInformationdata";
  }
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "500px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={4}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              General Particulars
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Student Name
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="NID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={sname}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Roll No
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                          >{roll_no}</Text>
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Register No
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="REID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={reg_no}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Gender
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="SID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={gender}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Date Of Birth
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="DOBID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={dob}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Department
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="DEPT"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={dept}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Batch
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="BATCH"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={batch}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Nationality
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="NATIONID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={nationality}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Religion
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="RELIGIONID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={religion}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          If Catholic ,Parish?
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="PARISHID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={if_catholic_parish}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Dalit Catholic
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="DALITID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={dalit_catholic_yn}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Community
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="COMMUNITYID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={community}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Blood Group
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="BLOODID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={blood_group}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Mother Tongue
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="MOTHERID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={mother_tongue}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Contact Number
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="CONTACTID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={contact_no}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Aadhar No
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="AADHARID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={aadhar_no}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Official Email ID
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          {licet_email}
                        </Text>
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Personal Email ID
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="PEREMID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={email}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Present Address
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="PREADDRID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={present_address}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          Permanent Address
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="PERADDRID"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={permanent_address}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          LANGUAGES KNOWN
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="LANKNOW"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={lang_know}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color={textColor}
                          fontWeight="bold"
                          minWidth="100%"
                        >
                          PAN 
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "17rem" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <FormControl>
                          <Input
                            id="PAN"
                            borderRadius="5px"
                            fontSize="sm"
                            type="text"
                            placeholder={pan}
                          />
                        </FormControl>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap={4}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Higher Secondary Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>

              <Tbody>
              <Tr>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                      >Name of the School
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <FormControl>
                        <Input
                          id="NOS1"
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder={hse_school_name}
                        />
                      </FormControl>
                    </Flex>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <Text
                      fontSize="md"
                      color={textColor}
                      fontWeight="bold"
                      minWidth="100%"
                    >Board
                    </Text>
                  </Flex>
                </Flex>
              </Td>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <FormControl>
                      <Input
                        id="BOARD1"
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder={hse_board}
                      />
                    </FormControl>
                  </Flex>
                </Flex>
              </Td>
            </Tr>
            <Tr>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    minWidth="100%"
                  >Medium Of Instruction
                  </Text>
                </Flex>
              </Flex>
            </Td>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <FormControl>
                    <Input
                      id="MOI1"
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      placeholder={hse_medium}
                    />
                  </FormControl>
                </Flex>
              </Flex>
            </Td>
          </Tr>
          <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Second Language
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="SL1"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={hse_sec_lang}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
        <Tr>
        <Td minWidth={{ sm: "17rem" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
              >Group
              </Text>
            </Flex>
          </Flex>
        </Td>
        <Td minWidth={{ sm: "17rem" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">
              <FormControl>
                <Input
                  id="GROUP1"
                  borderRadius="5px"
                  fontSize="sm"
                  type="text"
                  placeholder={hse_group}
                />
              </FormControl>
            </Flex>
          </Flex>
        </Td>
      </Tr>
      <Tr>
      <Td minWidth={{ sm: "17rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >Total Marks
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "17rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <FormControl>
              <Input
                id="TM1"
                borderRadius="5px"
                fontSize="sm"
                type="text"
                placeholder={hse_marks}
              />
            </FormControl>
          </Flex>
        </Flex>
      </Td>
    </Tr>
  <Tr>
  <Td minWidth={{ sm: "17rem" }}>
    <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
      <Flex direction="column">
        <Text
          fontSize="md"
          color={textColor}
          fontWeight="bold"
          minWidth="100%"
        >Overall Percentage
        </Text>
      </Flex>
    </Flex>
  </Td>
  <Td minWidth={{ sm: "17rem" }}>
    <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
      <Flex direction="column">
        <FormControl>
          <Input
            id="OP1"
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder={hse_percentage}
          />
        </FormControl>
      </Flex>
    </Flex>
  </Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >Cut-Off Marks
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="COM1"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={hse_cutoff}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >No. of Attempts
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="NOA1"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={hse_attempts}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
</Tbody>
</Table>
</CardBody>
        </Card>

         <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                10th Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>

              <Tbody>
              <Tr>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                      >Name of the School
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <FormControl>
                        <Input
                          id="NOS2"
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder={sslc_school_name}
                        />
                      </FormControl>
                    </Flex>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <Text
                      fontSize="md"
                      color={textColor}
                      fontWeight="bold"
                      minWidth="100%"
                    >Board
                    </Text>
                  </Flex>
                </Flex>
              </Td>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <FormControl>
                      <Input
                        id="BOARD2"
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder={sslc_board}
                      />
                    </FormControl>
                  </Flex>
                </Flex>
              </Td>
            </Tr>
            <Tr>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    minWidth="100%"
                  >Medium of Instruction
                  </Text>
                </Flex>
              </Flex>
            </Td>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <FormControl>
                    <Input
                      id="MOI2"
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      placeholder={sslc_medium}
                    />
                  </FormControl>
                </Flex>
              </Flex>
            </Td>
          </Tr>
          <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Second Language
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="SL2"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={sslc_sec_lang}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
      <Tr>
      <Td minWidth={{ sm: "17rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >Total Marks
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "17rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <FormControl>
              <Input
                id="TM2"
                borderRadius="5px"
                fontSize="sm"
                type="text"
                placeholder={sslc_marks}
              />
            </FormControl>
          </Flex>
        </Flex>
      </Td>
    </Tr>
  <Tr>
  <Td minWidth={{ sm: "17rem" }}>
    <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
      <Flex direction="column">
        <Text
          fontSize="md"
          color={textColor}
          fontWeight="bold"
          minWidth="100%"
        >Overall Percentage
        </Text>
      </Flex>
    </Flex>
  </Td>
  <Td minWidth={{ sm: "17rem" }}>
    <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
      <Flex direction="column">
        <FormControl>
          <Input
            id="OP2"
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder={sslc_percentage}
          />
        </FormControl>
      </Flex>
    </Flex>
  </Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >No. of Attempts
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="NOA2"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={sslc_attempts}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
</Tbody>
</Table>
</CardBody>
</Card>

        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Father's Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>

              <Tbody>
              <Tr>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                      >Father's name
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <FormControl>
                        <Input
                          id="FN"
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder={father_name}
                        />
                      </FormControl>
                    </Flex>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <Text
                      fontSize="md"
                      color={textColor}
                      fontWeight="bold"
                      minWidth="100%"
                    >Father's qualification
                    </Text>
                  </Flex>
                </Flex>
              </Td>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <FormControl>
                      <Input
                        id="FAQUA"
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder={father_qualification}
                      />
                    </FormControl>
                  </Flex>
                </Flex>
              </Td>
            </Tr>
            <Tr>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    minWidth="100%"
                  >Father's occupation
                  </Text>
                </Flex>
              </Flex>
            </Td>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <FormControl>
                    <Input
                      id="FAOC"
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      placeholder={father_occupation}
                    />
                  </FormControl>
                </Flex>
              </Flex>
            </Td>
          </Tr>
          <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Father's office address
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="FAOFAD"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={father_office_address}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
        <Tr>
        <Td minWidth={{ sm: "17rem" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
              >Father's annual income
              </Text>
            </Flex>
          </Flex>
        </Td>
        <Td minWidth={{ sm: "17rem" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">
              <FormControl>
                <Input
                  id="FAANIN"
                  borderRadius="5px"
                  fontSize="sm"
                  type="text"
                  placeholder={father_annual_income}
                />
              </FormControl>
            </Flex>
          </Flex>
        </Td>
      </Tr>
      <Tr>
      <Td minWidth={{ sm: "17rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >Father's mobile number
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "17rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <FormControl>
              <Input
                id="FAMOB"
                borderRadius="5px"
                fontSize="sm"
                type="text"
                placeholder={father_mob_no}
              />
            </FormControl>
          </Flex>
        </Flex>
      </Td>
    </Tr>
  <Tr>
  <Td minWidth={{ sm: "17rem" }}>
    <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
      <Flex direction="column">
        <Text
          fontSize="md"
          color={textColor}
          fontWeight="bold"
          minWidth="100%"
        >Father's email
        </Text>
      </Flex>
    </Flex>
  </Td>
  <Td minWidth={{ sm: "17rem" }}>
    <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
      <Flex direction="column">
        <FormControl>
          <Input
            id="FAEM"
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder={father_email}
          />
        </FormControl>
      </Flex>
    </Flex>
  </Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >Guardian name
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="GANA"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={guardian_name}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >Guardian qualification
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="GAQUA"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={guardian_qualification}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >Guardian occupation
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="GAOCC"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={guardian_occupation}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >Guardian office address
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="GAOFAD"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={guardian_office_address}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >Guardian annual income
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="GAANIN"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={guardian_annual_income}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >Guardian mobile number
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="GAMOB"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={guardian_mob_no}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >Guardian email id
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="GAEM"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={guardian_email}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
</Tbody>
</Table>
</CardBody>
</Card>


<Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Mother's Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>

              <Tbody>
              <Tr>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                      >Mother's Name
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <FormControl>
                        <Input
                          id="MN"
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder={mother_name}
                        />
                      </FormControl>
                    </Flex>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <Text
                      fontSize="md"
                      color={textColor}
                      fontWeight="bold"
                      minWidth="100%"
                    >Mothers's Qualification
                    </Text>
                  </Flex>
                </Flex>
              </Td>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <FormControl>
                      <Input
                        id="MOQUA"
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder={mother_qualification}
                      />
                    </FormControl>
                  </Flex>
                </Flex>
              </Td>
            </Tr>
            <Tr>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    minWidth="100%"
                  >Mother's occupation
                  </Text>
                </Flex>
              </Flex>
            </Td>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <FormControl>
                    <Input
                      id="MOOC"
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      placeholder={mother_occupation}
                    />
                  </FormControl>
                </Flex>
              </Flex>
            </Td>
          </Tr>
          <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Mother's office address
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="MOOFAD"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={mother_office_address}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
        <Tr>
        <Td minWidth={{ sm: "17rem" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
              >Mother's annual income
              </Text>
            </Flex>
          </Flex>
        </Td>
        <Td minWidth={{ sm: "17rem" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">
              <FormControl>
                <Input
                  id="MOANIN"
                  borderRadius="5px"
                  fontSize="sm"
                  type="text"
                  placeholder={mother_annual_income}
                />
              </FormControl>
            </Flex>
          </Flex>
        </Td>
      </Tr>
      <Tr>
      <Td minWidth={{ sm: "17rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >Mother's mobile number
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "17rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <FormControl>
              <Input
                id="MOMOB"
                borderRadius="5px"
                fontSize="sm"
                type="text"
                placeholder={mother_mob_no}
              />
            </FormControl>
          </Flex>
        </Flex>
      </Td>
    </Tr>
  <Tr>
  <Td minWidth={{ sm: "17rem" }}>
    <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
      <Flex direction="column">
        <Text
          fontSize="md"
          color={textColor}
          fontWeight="bold"
          minWidth="100%"
        >Mother's Email
        </Text>
      </Flex>
    </Flex>
  </Td>
  <Td minWidth={{ sm: "17rem" }}>
    <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
      <Flex direction="column">
        <FormControl>
          <Input
            id="MOEM"
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder={mother_email}
          />
        </FormControl>
      </Flex>
    </Flex>
  </Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >Number Of Siblings
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="NOSIB"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={no_of_siblings}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >Name Of Siblings
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="NASIB"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={name_siblings}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >Qualification Of Siblings
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="QUASIB"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={qualification_siblings}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >Occupation Of Siblings
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="OCCSIB"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={occupation_siblings}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >Alumni Of LICET Or LOYOLA
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="ALUMNILL"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder={alumni_licet_loyola_yn}
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
</Tbody>
</Table>
</CardBody>
</Card>

<Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Admission Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>

              <Tbody>
              <Tr>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                      >Application Number
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <FormControl>
                        <Input
                          id="APPNO"
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder={application_no}
                        />
                      </FormControl>
                    </Flex>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <Text
                      fontSize="md"
                      color={textColor}
                      fontWeight="bold"
                      minWidth="100%"
                    >Date of Admission
                    </Text>
                  </Flex>
                </Flex>
              </Td>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <FormControl>
                      <Input
                        id="DOA"
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder={date_of_ad}
                      />
                    </FormControl>
                  </Flex>
                </Flex>
              </Td>
            </Tr>
            <Tr>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    minWidth="100%"
                  >Quota
                  </Text>
                </Flex>
              </Flex>
            </Td>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <FormControl>
                    <Input
                      id="QUOTA"
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      placeholder={quota}
                    />
                  </FormControl>
                </Flex>
              </Flex>
            </Td>
          </Tr>
          <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Regular/Lateral Entry
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="RELA"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={regular_lateral_rl}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
        <Tr>
        <Td minWidth={{ sm: "17rem" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
              >Day Scholar/Hosteller
              </Text>
            </Flex>
          </Flex>
        </Td>
        <Td minWidth={{ sm: "17rem" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">
              <FormControl>
                <Input
                  id="DAHO"
                  borderRadius="5px"
                  fontSize="sm"
                  type="text"
                  placeholder={dayschl_hosteller_dh}
                />
              </FormControl>
            </Flex>
          </Flex>
        </Td>
      </Tr>
</Tbody>
</Table>
</CardBody>
</Card>

<Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Scholarship Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>

              <Tbody>
              <Tr>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                      >Scholarship Name
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <FormControl>
                        <Input
                          id="SCHONM"
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder={scholarship_name}
                        />
                      </FormControl>
                    </Flex>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <Text
                      fontSize="md"
                      color={textColor}
                      fontWeight="bold"
                      minWidth="100%"
                    >Scholarship Amount
                    </Text>
                  </Flex>
                </Flex>
              </Td>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <FormControl>
                      <Input
                        id="SCHOAMT"
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder={scholarship_amount}
                      />
                    </FormControl>
                  </Flex>
                </Flex>
              </Td>
            </Tr>
            <Tr>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    minWidth="100%"
                  >First Graduate
                  </Text>
                </Flex>
              </Flex>
            </Td>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <FormControl>
                    <Input
                      id="FIRGRA"
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      placeholder={first_graduate_yn}
                    />
                  </FormControl>
                </Flex>
              </Flex>
            </Td>
          </Tr>
          <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Economically Backward(Annual Income Of Parents Less than 1LPA)
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="ECOBK"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={eco_backward_yn}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
</Tbody>
</Table>
</CardBody>
</Card>


<Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Technical and Non Technical Skills
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>

              <Tbody>
              <Tr>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                      >Programming Languages
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <FormControl>
                        <Input
                          id="PROLAN"
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder={programming_languages}
                        />
                      </FormControl>
                    </Flex>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <Text
                      fontSize="md"
                      color={textColor}
                      fontWeight="bold"
                      minWidth="100%"
                    >Software Proficiency
                    </Text>
                  </Flex>
                </Flex>
              </Td>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <FormControl>
                      <Input
                        id="SOFTPRO"
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder={software_proficiency}
                      />
                    </FormControl>
                  </Flex>
                </Flex>
              </Td>
            </Tr>
            <Tr>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    minWidth="100%"
                  >Department Related Skills
                  </Text>
                </Flex>
              </Flex>
            </Td>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <FormControl>
                    <Input
                      id="DEPRELPRO"
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      placeholder={dept_rel_proficiency}
                    />
                  </FormControl>
                </Flex>
              </Flex>
            </Td>
          </Tr>
          <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Certifications
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="CERTI"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={certifications}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Other Technical Skills
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="OTHERTECSKILL"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={other_skills}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Aptitude/Analytical Skills
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="APANA"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={aptitude_analytical_skills}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Communication Skills
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="COMSKILL"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={communication_skills}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Social Media Exposure
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="SOMEEX"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={social_media_exposure}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Leadership Skills
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="LEADSKILL"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={leadership_skills}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Other Interpersonal Skills
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="OINTSKILL"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={other_interpersonal_skills}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
</Tbody>
</Table>
</CardBody>
</Card>

<Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Goals And Professional Membership
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>

              <Tbody>
              <Tr>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                      >Short Term Goals
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <FormControl>
                        <Input
                          id="SHOGOAL"
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder={short_term_goal}
                        />
                      </FormControl>
                    </Flex>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <Text
                      fontSize="md"
                      color={textColor}
                      fontWeight="bold"
                      minWidth="100%"
                    >Long Term Goals
                    </Text>
                  </Flex>
                </Flex>
              </Td>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <FormControl>
                      <Input
                        id="LONGGOAL"
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder={long_term_goal}
                      />
                    </FormControl>
                  </Flex>
                </Flex>
              </Td>
            </Tr>
            <Tr>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    minWidth="100%"
                  >Membership Name
                  </Text>
                </Flex>
              </Flex>
            </Td>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <FormControl>
                    <Input
                      id="MEMBNAME"
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      placeholder={membership_name}
                    />
                  </FormControl>
                </Flex>
              </Flex>
            </Td>
          </Tr>
          <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Membership Number
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="MEMBNO"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={membership_no}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >Membership Duration
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="MEMBDUR"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder={membership_duration}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
</Tbody>
</Table>
</CardBody>
</Card>


    </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid pt="1.5rem" columns={{ sm: 1, md: 2, xl: 2 }} gap={5}>
        <Card>
          <CardBody>
            <Button
              onClick={onOpen}
              colorScheme="orange"
              variant="solid"
              width="100%"
            >
              Save
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Details</ModalHeader>
            <ModalBody>Are you sure ?</ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  funedit();
                  onClose();
                }}
              >
                Submit
              </Button>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={onClose}
              >Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Button colorScheme="orange" variant="solid" width="100%">
              Cancel
            </Button>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}

export default GeneralInformationDataEdit;
