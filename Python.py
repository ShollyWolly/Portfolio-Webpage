#!C:\Users\Alexander\AppData\Local\Programs\Python\Python37-32\python.exe
print( "Content-type: text/html\n\n")
import cgi
import json

form = cgi.FieldStorage()

name = form.getvalue("name")
email = form.getvalue("email")
message = form.getvalue("Message")

x = [{"Name" : name, "Email" : email, "Message" : message}]

#print(x)


f = open("Nachrichten.json")
data = json.load(f)

#print(data, "this should be the data that is loaded")


NewData = x + data
#print(NewData)

json_object = json.dumps(NewData)


#print(json_object)

with open("Nachrichten.json", "w") as outfile:
    outfile.write(json_object)

outfile.close()


print ('<html>')
print ('  <head>')
print ('    <meta http-equiv="refresh" content=0;url=Kontakt.html />')
print ('    <title>You are going to be redirected</title>')
print ('  </head>') 
print ('  <body>')
print ('  </body>')
print ('</html>')