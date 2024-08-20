import streamlit as st
import os
import time

# Retrieve data from URL parameters
params = st.experimental_get_query_params()

# Extract patient details from the parameters
phone_number = params.get("phone_number", [""])[0]
patient_name = params.get("patient_name", [""])[0]
patient_age = params.get("patient_age", [""])[0]
patient_gender = params.get("patient_gender", [""])[0]
patient_condition = params.get("patient_condition", [""])[0]

# Compose the message
message = f"""
Patient Details:
Name: {patient_name}
Age: {patient_age}
Gender: {patient_gender}
Condition: {patient_condition}cd 
"""

# Display patient details
st.title("WhatsApp Message Sender")
st.write("Sending the following message via WhatsApp:")
st.text(message)

# Send the message when the page loads
if phone_number and message.strip():
    try:
        # Format the WhatsApp URL scheme
        whatsapp_url = f'whatsapp://send?phone={phone_number}&text={message}'

        # Open WhatsApp desktop application with the message
        os.system(f'start {whatsapp_url}')
        time.sleep(5)  # Give time for the message to be sent
        st.success("Message sent successfully!")
    except Exception as e:
        st.error(f"An error occurred: {str(e)}")
else:
    st.warning("Phone number or message is missing.")
