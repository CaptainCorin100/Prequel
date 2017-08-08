from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    if (request.method == "POST"):
        name = request.form["username"]
        logged_in = True
        if(logged_in):
            return render_template("home.html", description="Budget software", username=name)
    else:
        return render_template("home.html", description="Budget software", username="")

if(__name__ == "__main__"):
    app.run()
