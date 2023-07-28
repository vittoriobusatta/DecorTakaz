import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const STEPS = {
  COORDONNES: 0,
  DETAILS: 1,
  BUDGET: 2,
  COMMENTAIRE: 3,
  RECAP: 4,
};

const MATERIALS = [
  {
    label: "Bois de tamarin",
    value: "tamarin",
  },
  {
    label: "Résine époxy",
    value: "resine",
  },
  {
    label: "Bois massif",
    value: "massif",
  },
  {
    label: "Bois de rose",
    value: "rose",
  },
];

const RecapStep = ({ data }) => {
  return (
    <div className="form__wrap__recap">
      {data.map(
        (item, index) =>
          item.value !== "" && (
            <div
              key={index}
              className={`form__wrap__recap__item div${index + 1}`}
            >
              <h3>{item.title} :</h3>
              <p>
                {Array.isArray(item.value)
                  ? item.value.map((val, idx) => (
                      <span key={idx}>
                        {val}
                        {idx !== item.value.length - 1 && ","}
                      </span>
                    ))
                  : item.value}
                {item.unit && <span>{item.unit}</span>}
              </p>
            </div>
          )
      )}
    </div>
  );
};

const Input = ({
  id,
  label,
  type,
  required,
  disabled,
  formatPrice,
  register,
  strenghtLabel,
  className,
  min,
  max,
}) => {
  const [pattern, setPattern] = useState(/./);
  useEffect(() => {
    switch (type) {
      case "email":
        if (strenghtLabel) {
          setPattern(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/);
          break;
        }
      case "password":
        if (strenghtLabel) {
          setPattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^ws]).{8,}$/);
          break;
        }
      default:
        setPattern(/./);
        break;
    }
  }, [type, strenghtLabel]);

  return (
    <>
      {formatPrice && <span className="form__group__currency">€</span>}
      <input
        id={id}
        disabled={disabled}
        className={
          className ? `form__group__input ${className}` : "form__group__input"
        }
        {...register(id, {
          required,
          pattern: {
            value: pattern,
            message: `Inserer un ${
              type === "email" ? "email" : "mot de passe"
            }.`,
          },
        })}
        min={min}
        max={max}
        placeholder={label}
        type={type}
      />
    </>
  );
};

export default function Home({ isOpened, setIsOpened }) {
  const [step, setStep] = useState(STEPS.COORDONNES);
  const [isLoading, setIsLoading] = useState(false);
  const { register, setValue, watch } = useForm({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      city: "",
      type: "",
      height: "",
      width: "",
      length: "",
      budget: "",
      project: "",
      material: [],
      comment: "",
    },
  });

  const type = watch("type");
  const material = watch("material");
  const name = watch("name");
  const lastname = watch("lastname");
  const email = watch("email");
  const phone = watch("phone");
  const city = watch("city");
  const height = watch("height");
  const width = watch("width");
  const length = watch("length");
  const budget = watch("budget");
  const project = watch("project");
  const comment = watch("comment");

  const data = [
    { title: "Nom", value: `${lastname}` },
    { title: "Prénom", value: `${name}` },
    { title: "Email", value: email },
    {
      title: "Téléphone",
      value: `${phone.substring(0, 2)} ${phone.substring(
        2,
        4
      )} ${phone.substring(4, 6)} ${phone.substring(6, 8)} ${phone.substring(
        8,
        10
      )}`,
    },
    { title: "Ville", value: city },
    { title: "Type de client", value: type },
    { title: "Type de produit", value: project },
    { title: "Dimensions", value: `H: ${height} x L: ${width} x l: ${length}` },
    { title: "Matériaux", value: material },
    { title: "Budget", value: `${budget}€` },
  ];

  const stepIsValid = () => {
    switch (step) {
      case STEPS.COORDONNES:
        return (
          name !== "" &&
          lastname !== "" &&
          email !== "" &&
          phone !== "" &&
          city !== "" &&
          type !== ""
        );
      case STEPS.DETAILS:
        return (
          height !== "" && width !== "" && length !== "" && material.length > 0
        );
      case STEPS.BUDGET:
        return budget !== "";
      case STEPS.COMMENTAIRE:
        return true;
      case STEPS.RECAP:
        return true;
      default:
        return false;
    }
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    if (stepIsValid()) {
    setStep((value) => value + 1);
    }
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.RECAP) {
      return "Créer";
    }

    return "Suivant";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.COORDONNES) {
      return undefined;
    }

    return "Retour";
  }, [step]);

  const onSubmit = async (data) => {
    if (step !== STEPS.RECAP) {
      return;
    }

    setIsLoading(true);
    axios
      .post("/api/contact", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setStep(STEPS.COORDONNES);
      })
      .finally(() => {
        setIsLoading(false);
        setIsOpened(false);
      });
  };

  const dataToSend = {
    name,
    lastname,
    email,
    phone,
    city,
    type,
    height,
    width,
    length,
    budget,
    project,
    material,
    comment,
  };

  let bodyContent;
  let headerContent;

  switch (step) {
    case STEPS.DETAILS:
      headerContent = (
        <div className="form__content">
          <h1>Détails du projet</h1>
        </div>
      );
      bodyContent = (
        <div className="form__content">
          <div className="form__wrap">
            <h3>
              Décrivez-nous le type de produit que vous souhaitez réaliser :
              (ex: table, chaise, lit, etc...)
            </h3>
            <Input
              id="project"
              label="Type de produit"
              type="text"
              required
              register={register}
              className="coordonees__input"
            />
          </div>
          <div className="form__wrap">
            <h4>Dimensions requises :</h4>
            <div className="form__dims">
              <Input
                id="height"
                label="Hauteur"
                type="number"
                required
                register={register}
                className="form__dims__button"
                min={0}
              />
              <Input
                id="width"
                label="Largeur"
                type="number"
                required
                register={register}
                className="form__dims__button"
                min={0}
              />
              <Input
                label="Longueur"
                id="length"
                type="number"
                required
                register={register}
                className="form__dims__button"
                min={0}
              />
            </div>
          </div>
          <div className="form__wrap">
            <h4>Matériaux souhaités :</h4>
            <div className="form__materials">
              {MATERIALS.map((mats, index) => (
                <button
                  key={index}
                  className={
                    material.includes(mats.value)
                      ? "form__type__group__button form__type__group__button--selected"
                      : "form__type__group__button"
                  }
                  onClick={() => {
                    if (material.includes(mats.value)) {
                      setValue(
                        "material",
                        material.filter((mat) => mat !== mats.value)
                      );
                    } else {
                      setValue("material", [...material, mats.value]);
                    }
                  }}
                >
                  {mats.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
      break;
    case STEPS.BUDGET:
      headerContent = (
        <div className="form__content">
          <h1>Budget</h1>
        </div>
      );
      bodyContent = (
        <div className="form__content">
          <div className="form__wrap">
            <h3>Quel est votre budget ?</h3>
            <Input
              id="budget"
              label="Budget"
              type="number"
              required
              register={register}
              className="coordonees__input"
              min={0}
            />
          </div>
        </div>
      );
      break;
    case STEPS.COMMENTAIRE:
      headerContent = (
        <div className="form__content">
          <h1>Commentaire</h1>
        </div>
      );
      bodyContent = (
        <div className="form__content">
          <div className="form__wrap">
            <h3>
              {`Si vous avez des remarques ou des précisions à apporter, n'hésitez
              pas à nous en faire part :`}
            </h3>
            <textarea
              id="comment"
              className="form__comments__input"
              {...register("comment")}
              placeholder="Commentaire"
            />
          </div>
        </div>
      );
      break;
    case STEPS.RECAP:
      headerContent = (
        <div className="form__content">
          <h1>Récapitulatif</h1>
        </div>
      );
      bodyContent = (
        <div className="form__content">{data && <RecapStep data={data} />}</div>
      );
      break;
    default:
      headerContent = (
        <div className="form__content">
          <h1>Coordonnées</h1>
        </div>
      );
      bodyContent = (
        <div className="form__content">
          <div className="form__wrap">
            <h3>
              Pour vous contacter, merci de remplir les champs ci-dessous :
            </h3>
            <form className="form__form">
              <Input
                id="lastname"
                label="Prénom"
                type="text"
                required
                register={register}
                className="coordonees__input"
              />
              <Input
                id="name"
                label="Nom"
                type="text"
                required
                register={register}
                className="coordonees__input"
              />
              <Input
                id="email"
                label="Email"
                type="email"
                required
                register={register}
                strenghtLabel
                className="coordonees__input"
              />
              <Input
                id="phone"
                label="Téléphone"
                type="tel"
                required
                register={register}
                className="coordonees__input"
              />
              <Input
                id="city"
                label="Ville"
                type="text"
                required
                register={register}
                className="coordonees__input"
              />
            </form>
          </div>
          <div className="form__wrap">
            <h4>Type de client :</h4>
            <div className="form__type__group">
              <button
                className={
                  type === "particulier"
                    ? "form__type__group__button form__type__group__button--selected"
                    : "form__type__group__button"
                }
                onClick={() => {
                  setValue("type", "particulier");
                }}
              >
                Particulier
              </button>
              <button
                className={
                  type === "professionnel"
                    ? "form__type__group__button form__type__group__button--selected"
                    : "form__type__group__button"
                }
                onClick={() => {
                  setValue("type", "professionnel");
                }}
              >
                Professionnel
              </button>
            </div>
          </div>
        </div>
      );
      break;
  }

  return (
    <>
      <div className="form">
        <div className="form__container">
          <div className="form__header">{headerContent}</div>
          <div className="form__body">{bodyContent}</div>
          <div className="form__footer">
            {step !== STEPS.COORDONNES && (
              <button
                className="form__footer__button form__footer__button--back"
                onClick={onBack}
              >
                {secondaryActionLabel}
              </button>
            )}

            <button
              className="form__footer__button form__footer__button--next"
              onClick={
                step === STEPS.RECAP
                  ? () => {
                      onSubmit({
                        ...dataToSend,
                      });
                    }
                  : onNext
              }
            >
              {isLoading ? (
                <div class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                actionLabel
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className="overlay"
        onClick={() => {
          setIsOpened(false);
        }}
      ></div>
    </>
  );
}
