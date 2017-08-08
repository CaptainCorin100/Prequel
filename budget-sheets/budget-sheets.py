from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():  #define what happens when the user asks to load home
    if (request.method == "POST"): #check if the user sent info using post
        name = request.form["username"] #get the username sent when loading the pageh
        logged_in = True
        if(logged_in):
            return render_template("home.html", description="Budget software", username=name) #show the user the page with their username
    else:
        return render_template("home.html", description="Budget software", username="")

if(__name__ == "__main__"):
    app.run()
user.n
