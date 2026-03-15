from dotenv import load_dotenv
import os
from huggingface_hub import InferenceClient

# Load environment variables
load_dotenv()

api_key = os.getenv("HUGGINGFACE_API_KEY")

client = InferenceClient(api_key=api_key)