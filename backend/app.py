from flask import Flask, redirect, url_for, Response, render_template

app= Flask(__name__)


@app.route("/")
def main():
    return redirect('/client/src/index.html')

if __name__ == "__main__":
    app.run(debug=True)

