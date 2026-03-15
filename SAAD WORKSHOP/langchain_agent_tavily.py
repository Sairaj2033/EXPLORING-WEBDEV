import os 
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_agent_tavily import TavilySearch
from langchain_tavily import TavilySearch
from langchain_classic.agents import create_react_agent, AgentExecutor
from langchain_core.prompts import PromptTemplate

from dotenv import load_dotenv
load_dotenv()

llm = ChatGoogleGenerativeAI(
    model="gemni-2.5-flash-lite",
    temprature=0 #Zero temprature for logical consisency in agents
)

search_tool = TanvilySearch(max_results=3)
tools = [search_tool]


template= ***Answer the following qquestion as best you can. You have acess of the following tools :

{tools}
Use the following format:

question : the input question you must answer 
Thought : you should always think about what to do  ,should be onoe of  [{tools_name}] 
